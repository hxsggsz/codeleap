import { StyledNewPost } from "."
import { Text } from "../Text/text"
import { Input } from "../input/input"
import { Button } from "../button/button"
import { FormEvent, useState, useEffect } from 'react';

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
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [IsTitle, setIsTitle] = useState(false)
  const [isContentActive, setIsContent] = useState(false)

  useEffect(() => {
    title !== "" ? setIsTitle(true) : setIsTitle(false)
    content !== "" ? setIsContent(true) : setIsContent(false)
  }, [content, title])


  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const data = {
      username: "codeleap",
      title,
      content
    }
    mutate(data)

    setTitle("")
    setContent("")
  }

  return (
    <StyledNewPost>
      <main className="card">
        <Text size="lg">What is on your mind?</Text>

        <form onSubmit={handleSubmit}>
          <Input
            label="Title"
            value={title}
            isActive={IsTitle}
            onChange={(ev) => setTitle(ev.currentTarget.value)}
          />
          <Input
            isContent
            label="Content"
            value={content}
            isActive={isContentActive}
            onChange={(ev) => setContent(ev.currentTarget.value)}
          />

          <div className="button">
            <Button variant="blue" type="submit" isActive={isContentActive && IsTitle ? true : false}>Create</Button>
          </div>
        </form>
      </main>
    </StyledNewPost>
  )
}