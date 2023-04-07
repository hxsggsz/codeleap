import { StyledNewPost } from "."
import { Text } from "../Text/text"
import { Input } from "../input/input"
import { Button } from "../button/button"
import { useState } from "react"

export const NewPost = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [IsTitle, setIsTitle] = useState(false)
  const [isContentActive, setIsContent] = useState(false)

  function handleSubmit(ev: )

  return ( 
    <StyledNewPost>
      <main className="card">
        <Text size="lg">What’s on your mind?</Text>
        <form>
          <Input
            isActive={IsTitle}
            label="Title"
          />
          <Input
            isContent
            isActive={isContentActive}
            label="Content"
          />
          <div className="button">
            <Button isActive={isContentActive && IsTitle ? false : true}>Create</Button>
          </div>
        </form>
      </main>
    </StyledNewPost>
  )
}