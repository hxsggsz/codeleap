import { Text } from "../Text/text"
import { StyledPost } from "./index"
import { useSearchParams } from "react-router-dom"
import { Trash, NotePencil, X } from "phosphor-react"
import { useDispatch } from "react-redux"
import { handleShow } from "../../redux/sliceDeleteModal"
import { handleShowUpdate } from "../../redux/sliceUpdateModal"
import { handleShowPostModal } from "../../redux/slicePostModal"

type PostType = {
  id: number
  title: string
  content: string
  username: string
  isModal?: boolean
  created_datetime: Date
}
  
export const Posts = (props: PostType) => {
  let [_, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  
  const newDate = new Date()
  const date = new Date(props.created_datetime)
  const newHour = newDate.getHours() - date.getHours()
  const newminute = newDate.getMinutes() - date.getMinutes()

  function handleDelete(id: number) {
    dispatch(handleShow())
    setSearchParams({ delete: id.toString() })
  }

  function handleUpdate(id: number) {
    dispatch(handleShowUpdate())
    setSearchParams({ update: id.toString() })
  }
  
  function handleShowModal(username: string, id: number) {
    dispatch(handleShowPostModal())
    setSearchParams({ username, id: id.toString() })
  }
  function handleClosePostModal() {
    dispatch(handleShowPostModal())
    setSearchParams({})
  }
  
  function handleCloseModal() {
    dispatch(handleShow())
    setSearchParams({})
  }

  return (
    <StyledPost>
      <div className="header">
        <Text size="lg">{props.title}</Text>

        <div className="icons">
          {props.isModal && <X onClick={handleClosePostModal} cursor="pointer" size={25} weight="bold" />}

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