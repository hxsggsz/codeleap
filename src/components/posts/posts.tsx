import { Dispatch, SetStateAction } from "react"
import { Text } from "../Text/text"
import { StyledPost } from "./index"
import { Trash, NotePencil } from "phosphor-react"
import { useSearchParams } from "react-router-dom"

type PostType = {
  id: number
  title: string
  content: string
  username: string
  created_datetime: Date
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setIsOpenUpdate: Dispatch<SetStateAction<boolean>>
}

export const Posts = (props: PostType) => {
  let [_, setSearchParams] = useSearchParams()
  const newDate = new Date()
  const date = new Date(props.created_datetime)
  const newHour = newDate.getHours() - date.getHours()
  const newminute = newDate.getMinutes() - date.getMinutes()

  function handleDelete(id: number) {
    props.setIsOpen(true)
    setSearchParams({ delete: id.toString() })
  }
  function handleUpdate(id: number) {
    props.setIsOpenUpdate(true)
    setSearchParams({ update: id.toString() })
  }

  return (
    <StyledPost>
      <div className="header">
        <Text size="lg">{props.title}</Text>

        <div className="icons">
          {props.username === "codeleap" && (
            <>
              <Trash onClick={() => handleDelete(props.id)} cursor="pointer" size={25} weight="bold" />
              <NotePencil onClick={() => handleUpdate(props.id)} cursor="pointer" size={25} weight="bold" />
            </>
          )}
        </div>
      </div>

      <div className="content">
        <div className="infos">
          <Text>@{props.username}</Text>

          <Text>{newHour !== 0 ? `${newHour} hours ago` : `${newminute} minutes ago`}</Text>
        </div>

        <div className="text">
          <Text>{props.content}</Text>
        </div>
      </div>
    </StyledPost>
  )
}