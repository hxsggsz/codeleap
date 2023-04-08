import { useSearchParams } from "react-router-dom"
import { StyledPostModal } from "."
import { useGetUniquePosts } from "../../../actions/usePosts"
import { Posts } from "../../posts/posts"
import { useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../redux/store"

export const PostModal = () => {
  let [searchParams, _] = useSearchParams()
  const id = searchParams.get("id")
  const username = searchParams.get("username")
  const { data } = useGetUniquePosts(username!)
  const { isOpen } = useSelector((state: RootState) => state.slicePostModal)
  

  const post = useMemo(() => {
    if (data) {
      return data.results.find(post => post.id === Number(id) && post.username === username)
    }
  }, [data])

  return (
    <>
      {isOpen && (
        <StyledPostModal>
          {post && (
            <Posts
              isModal
              id={post.id}
              key={post.id}
              title={post.title}
              content={post.content}
              username={post.username}
              created_datetime={post.created_datetime}
            />
          )}
        </StyledPostModal>
      )}
    </>
  )
}