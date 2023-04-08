import { Text } from "../Text/text"
import { StyledPost } from "./index"
import { useSearchParams } from "react-router-dom"
import { Trash, NotePencil, X } from "phosphor-react"
import { useDispatch } from "react-redux"
import { handleShow } from "../../redux/sliceDeleteModal"
import { handleShowUpdate } from "../../redux/sliceUpdateModal"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type PostType = {
  id: number
  title: string
  content: string
  username: string
  isModal?: boolean
  created_datetime: Date
}

export const Posts = (props: PostType) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
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

  return (
    <>
      <StyledPost layoutId={props.id.toString()}>
        <motion.div className="header">
          <Text size="lg">{props.title}</Text>

          <motion.div className="icons">
            {props.username === "codeleap" && (
              <>
                <Trash onClick={() => handleDelete(props.id)} cursor="pointer" size={25} weight="bold" />
                <NotePencil onClick={() => handleUpdate(props.id)} cursor="pointer" size={25} weight="bold" />
              </>
            )}
          </motion.div>
        </motion.div>

        <motion.div onClick={() => setSelectedId(props.id.toString())} className="content">
          <motion.div className="infos">
            <Text>@{props.username}</Text>

            <Text>{newHour !== 0 ? `${newHour} hours ago` : `${newminute} minutes ago`}</Text>
          </motion.div>

          <motion.div className="text">
            <Text>{props.content}</Text>
          </motion.div>
        </motion.div>
      </StyledPost>

        {selectedId && (
      <AnimatePresence>
          <StyledPost >
            <motion.div className="shadow" >
              <motion.div layoutId={selectedId}>
                <motion.div className="header">
                  <Text size="lg">{props.title}</Text>

                  <motion.div className="icons">
                    <X onClick={() => setSelectedId(null)} cursor="pointer" size={25} weight="bold" />

                    {props.username === "codeleap" && (
                      <>
                        <Trash onClick={() => handleDelete(props.id)} cursor="pointer" size={25} weight="bold" />
                        <NotePencil onClick={() => handleUpdate(props.id)} cursor="pointer" size={25} weight="bold" />
                      </>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div className="content">
                  <motion.div className="infos">
                    <Text>@{props.username}</Text>

                    <Text>{newHour !== 0 ? `${newHour} hours ago` : `${newminute} minutes ago`}</Text>
                  </motion.div>

                  <motion.div className="text">
                    <Text>{props.content}</Text>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </StyledPost>
      </AnimatePresence>
        )}
    </>
  )
}