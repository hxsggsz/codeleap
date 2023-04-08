import { useState } from "react"
import { Posts } from "../components/posts/posts"
import { useSearchParams } from "react-router-dom"
import { StyledPosts } from "../styles/mainScreen"
import { useGetAllPosts } from "../actions/usePosts"
import { Header } from "../components/header/header"
import { NewPost } from "../components/new-post/new-post"
import { Loading } from "../components/skeleton/skeleton"
import { PostModal } from "../components/modals/post-modal/post-modal"
import { DeleteModal } from "../components/modals/delete-modal/delete-modal"
import { UpdateModal } from "../components/modals/update-modal/update-modal"
import { useChangePost, useDeletePost, useNewPost } from "../actions/usePosts"

export const MainScreen = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const newId = searchParams.get('update')
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const { mutate } = useNewPost()
  const { data, isLoading, isFetching } = useGetAllPosts()
  const { mutate: deletePost } = useDeletePost()
  const { mutate: changePost } = useChangePost(newId!)
  const id = searchParams.get("delete")

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
        {isLoading || isFetching ? <Loading /> : data?.results.map(post => (
          <Posts
            key={post.id}
            id={post.id}
            title={post.title}
            setIsOpen={setIsOpen}
            content={post.content}
            username={post.username}
            setIsOpenUpdate={setIsOpenUpdate}
            created_datetime={post.created_datetime}
          />
        ))}
          <DeleteModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            deletePost={() => handleDeletePost(id!)}
          />
        <UpdateModal
          isOpen={isOpenUpdate}
          setIsOpen={setIsOpenUpdate} mutate={changePost}
        />
      </StyledPosts>
    </>
  )
}