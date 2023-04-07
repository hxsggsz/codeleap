import { Trash, NotePencil } from "phosphor-react"
import { Text } from "../Text/text"
import { StyledPost } from "./index"

type PostType = {
  title: string
  content: string
  username: string
  created_datetime: Date
}

export const Posts = (props: PostType) => {
  const data = new Date()
  return (
    <StyledPost>
      <div className="header">
        <Text size="lg">{props.title}</Text>

        <div className="icons">
          <Trash cursor="pointer" size={25} weight="bold" />
          <NotePencil cursor="pointer" size={25} weight="bold" />
        </div>
      </div>

      <div className="content">
        <div className="infos">
          <Text>@{props.username}</Text>

          <Text>{}</Text>
        </div>

        <div className="text">
          <Text>{props.content}</Text>
        </div>
      </div>
    </StyledPost>
  )
}