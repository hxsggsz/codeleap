import { useEffect, useState } from "react"
import { Text } from "../components/Text/text"
import { Posts } from "../components/posts/posts"
import { useSearchParams } from "react-router-dom"
import { StyledPosts } from "../styles/mainScreen"
import { useGetAllPosts } from "../actions/usePosts"
import { Header } from "../components/header/header"
import { useInView } from "react-intersection-observer"
import { NewPost } from "../components/new-post/new-post"
import { Loading } from "../components/skeleton/skeleton"
import { LoadingMore } from "../components/loading/loading"
import { TopButton } from "../components/top-button/top-button"
import { PostModal } from "../components/modals/post-modal/post-modal"
import { DeleteModal } from "../components/modals/delete-modal/delete-modal"
import { UpdateModal } from "../components/modals/update-modal/update-modal"
import { useChangePost, useDeletePost, useNewPost } from "../actions/usePosts"

export const MainScreen = () => {
  const { ref, inView } = useInView()
  let [searchParams, setSearchParams] = useSearchParams()
  const newId = searchParams.get('update')
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const { mutate } = useNewPost()
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } = useGetAllPosts()
  const { mutate: deletePost } = useDeletePost()
  const { mutate: changePost } = useChangePost(newId!)
  const id = searchParams.get("delete")
  
  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  function handleDeletePost(id: string) {
    deletePost(id)
    setIsOpen(false)
    setSearchParams({})
  }

  return (
    <>
      <Header />
      <StyledPosts
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "tween" }}
      >
        <NewPost mutate={mutate} />
        <PostModal />
        {isLoading || isFetching ? <Loading /> : data?.pages.map(post =>
          post.results.map(result => (
            (

              <Posts
                key={result.id}
                id={result.id}
                title={result.title}
                setIsOpen={setIsOpen}
                content={result.content}
                username={result.username}
                setIsOpenUpdate={setIsOpenUpdate}
                created_datetime={result.created_datetime}
              />
            )
          )))}
        <DeleteModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          deletePost={() => handleDeletePost(id!)}
        />
        <UpdateModal
          isOpen={isOpenUpdate}
          setIsOpen={setIsOpenUpdate} mutate={changePost}
        />
        <TopButton />
        <div ref={ref}>{isFetching && <LoadingMore />}</div>
        <Text size="lg" >{!hasNextPage && !isLoading && "Congrats!, you have been seen all content!🤯"}</Text>
      </StyledPosts>
    </>
  )
}