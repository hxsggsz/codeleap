import { useEffect } from "react"
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
import { DeleteModal } from "../components/modals/delete-modal/delete-modal"
import { UpdateModal } from "../components/modals/update-modal/update-modal"
import { useChangePost, useDeletePost, useNewPost } from "../actions/usePosts"

export const MainScreen = () => {
  const { ref, inView } = useInView()
  let [searchParams, _] = useSearchParams()
  const newId = searchParams.get('update')
  const { mutate } = useNewPost()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isFetching } = useGetAllPosts()
  const { mutate: deletePost } = useDeletePost()
  const { mutate: changePost } = useChangePost(newId!)

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

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

        {isLoading ? <Loading /> : data?.pages.map(post =>
          post.results.map(result => (
            (

              <Posts
                key={result.id}
                id={result.id}
                title={result.title}
                content={result.content}
                username={result.username}
                created_datetime={result.created_datetime}
              />
            )
          )))}
        <DeleteModal deletePost={deletePost} />

        <UpdateModal mutate={changePost} />
        <TopButton />
        <div ref={ref}>{isFetching && <LoadingMore />}</div>
        <Text size="lg" >{!hasNextPage && !isLoading && "Congrats!, you have been seen all content!🤯"}</Text>
      </StyledPosts>
    </>
  )
}