import { Text } from "../Text/text"
import { StyledPost } from "./index"
import { Dispatch, SetStateAction, useCallback } from "react"
import { useSearchParams } from "react-router-dom"
import { Trash, NotePencil, X } from "phosphor-react"

type PostType = {
  id: number
  title: string
  content: string
  username: string
  isModal?: boolean
  IsPostModal?: boolean
  setIsPostModal?: Dispatch<SetStateAction<boolean>>
  created_datetime: Date
  setIsOpen?: Dispatch<SetStateAction<boolean>>
  setIsOpenUpdate?: Dispatch<SetStateAction<boolean>>
}
  
export const Posts = (props: PostType) => {
  let [_, setSearchParams] = useSearchParams()
  const newDate = new Date()
  const date = new Date(props.created_datetime)
  const newHour = newDate.getHours() - date.getHours()
  const newminute = newDate.getMinutes() - date.getMinutes()

  function handleDelete(id: number) {
    props.setIsOpen && props.setIsOpen(true)
    setSearchParams({ delete: id.toString() })
  }

  function handleUpdate(id: number) {
    props.setIsOpenUpdate && props.setIsOpenUpdate(true)
    setSearchParams({ update: id.toString() })
  }
  
  const handleShowModal = useCallback((username: string, id: number) => {
    props.setIsPostModal && props.setIsPostModal(true)
    setSearchParams({ username, id: id.toString() })
    console.log(props.IsPostModal)
  }, []);
  
  function handleCloseModal() {
    props.setIsPostModal && props.setIsPostModal(false)
    setSearchParams({})
  }

  return (
    <StyledPost>
      <div className="header">
        <Text size="lg">{props.title}</Text>

        <div className="icons">
          {props.isModal && <X onClick={handleCloseModal} cursor="pointer" size={25} weight="bold" />}

          {props.username === "codeleap" && (
            <>
              <Trash onClick={() => handleDelete(props.id)} cursor="pointer" size={25} weight="bold" />
              <NotePencil onClick={() => handleUpdate(props.id)} cursor="pointer" size={25} weight="bold" />
            </>
          )}
        </div>
      </div>

      <div onClick={() => handleShowModal(props.username, props.id)} className="content">
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