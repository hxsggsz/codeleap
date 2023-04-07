import { useChangePost, useDeletePost, useNewPost } from "../actions/usePosts"
import { Posts } from "../components/posts/posts"
import { StyledPosts } from "../styles/mainScreen"
import { useGetAllPosts } from "../actions/usePosts"
import { Header } from "../components/header/header"
import { NewPost } from "../components/new-post/new-post"
import { DeleteModal } from "../components/modals/delete-modal/delete-modal"
import { FormEvent, SetStateAction, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { UpdateModal } from '../components/modals/update-modal/update-modal';

export const MainScreen = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  let [searchParams, setSearchParams] = useSearchParams()
  const newId = searchParams.get('update')
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const { mutate } = useNewPost()
  const { data } = useGetAllPosts()
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
      <StyledPosts>
        <NewPost mutate={mutate} />

        {data?.results.map(post => (
          <Posts
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            username={post.username}
            created_datetime={post.created_datetime}
            setIsOpen={setIsOpen} 
            setIsOpenUpdate={setIsOpenUpdate} />
        ))}
        <DeleteModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          deletePost={() => handleDeletePost(id!)}
        />
        <UpdateModal
          isOpen={isOpenUpdate}
          setIsOpen={setIsOpenUpdate} mutate={changePost}        />
      </StyledPosts>
    </>
  )
}