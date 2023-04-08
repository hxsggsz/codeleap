import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Button } from "../../button/button"
import { StyledUpdateModal } from "."
import { useSearchParams } from "react-router-dom"
import { Input } from "../../input/input"
import { Text } from "../../Text/text"
import { AnimatePresence, motion } from "framer-motion"

type DeleteModalTypes = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  mutate: (
    data: {
      title: string,
      content: string,
    }
  ) => void
}

export const UpdateModal = (props: DeleteModalTypes) => {
  let [_, setSearchParams] = useSearchParams()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [IsTitle, setIsTitle] = useState(false)
  const [isContentActive, setIsContent] = useState(false)

  useEffect(() => {
    title !== "" ? setIsTitle(true) : setIsTitle(false)
    content !== "" ? setIsContent(true) : setIsContent(false)
  }, [content, title])

  function handleClose() {
    props.setIsOpen(false)
    setSearchParams({})
  }

  function handleSubmit() {
    const data = {
      title,
      content
    }
    props.mutate(data)
    handleClose()
  }

  return (
    <AnimatePresence>
      {props.isOpen && (
        <StyledUpdateModal>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "tween" }}
            className="card"
          >
            <Text size="lg">What is on your mind?</Text>

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

            <div className="buttons">
              <Button onClick={handleClose} variant="white" isActive>Cancel</Button>
              <Button onClick={handleSubmit} variant="green" isActive={isContentActive && IsTitle ? true : false }>Save</Button>
            </div>
          </motion.div>
        </StyledUpdateModal>
      )}
    </AnimatePresence>
  )
}