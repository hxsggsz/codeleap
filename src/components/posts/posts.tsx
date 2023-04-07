import { Trash, NotePencil } from "phosphor-react"
import { Text } from "../Text/text"
import { StyledPost } from "./index"

export const Posts = () => {
  return (
    <StyledPost>
      <div className="header">
        <Text size="lg">title</Text>

        <div className="icons">
          <Trash size={25} weight="bold" />
          <NotePencil size={25} weight="bold" />
        </div>
      </div>

      <div className="content">
        <Text>@</Text>

        <Text>@</Text>
      </div>
    </StyledPost>
  )
}