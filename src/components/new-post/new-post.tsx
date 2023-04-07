import { StyledNewPost } from "."
import { Text } from "../Text/text"
import { Input } from "../input/input"
import { Button } from "../button/button"

export const NewPost = () => {
  return (
    <StyledNewPost>
      <main className="card">
        <Text size="lg">What’s on your mind?</Text>
        <form>
          <Input
            isActive={false}
            label="Title"
          />
          <Input
            isContent
            isActive={false}
            label="Content"
          />
          <div className="button">
            <Button>Create</Button>
          </div>
        </form>
      </main>
    </StyledNewPost>
  )
}