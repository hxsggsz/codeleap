import { StyledNewPost } from "."
import { FormEvent } from "react"
import { Text } from "../Text/text"
import { Input } from "../input/input"
import { Button } from "../button/button"
import { RootState } from "../../redux/store"
import { useSelector, useDispatch } from "react-redux"
import { clearInput, handleContentInput, handleTitleInput } from "../../redux/sliceNewPost"

type NewPostType = {
  mutate: (
    data: {
      title: string,
      content: string,
      username: string
    }
  ) => void
}

export const NewPost = ({mutate}: NewPostType) => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.sliceNewPost)

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const data = {
      username: "codeleap",
      title: state.titleInput,
      content: state.contentInput
    }
    mutate(data)

    dispatch(clearInput())
  }

  return (
    <StyledNewPost>
      <main className="card">
        <Text size="lg">What is on your mind?</Text>

        <form onSubmit={handleSubmit}>
          <Input
            label="Title"
            value={state.titleInput}
            isActive={state.isTitleInput}
            onChange={(ev) => dispatch(handleTitleInput(ev.currentTarget.value))}
          />
          <Input
            isContent 
            label="Content"
            value={state.contentInput}
            isActive={state.isContentInput}
            onChange={(ev) => dispatch(handleContentInput(ev.currentTarget.value))}
          />

          <div className="button">
            <Button variant="blue" type="submit" isActive={state.isContentInput && state.isTitleInput ? true : false}>Create</Button>
          </div>
        </form>
      </main>
    </StyledNewPost>
  )
}