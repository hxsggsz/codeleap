import { Button } from "../../button/button"
import { StyledUpdateModal } from "."
import { useSearchParams } from "react-router-dom"
import { Input } from "../../input/input"
import { Text } from "../../Text/text"
import { AnimatePresence, motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../redux/store"
import { handleContent, handleShowUpdate, handleTitle } from "../../../redux/sliceUpdateModal"

type DeleteModalTypes = {
  mutate: (
    data: {
      title: string,
      content: string,
    }
  ) => void
}

export const UpdateModal = ({ mutate }: DeleteModalTypes) => {
  let [_, setSearchParams] = useSearchParams()
  const state = useSelector((state: RootState) => state.sliceUpdateModal)
  const dispatch = useDispatch()

  function handleClose() {
    dispatch(handleShowUpdate())
    setSearchParams({})
  }

  function handleSubmit() {
    const data = {
      title: state.title,
      content: state.content,
    }
    mutate(data)
    setSearchParams({})
    dispatch(handleShowUpdate())
  }

  return (
    <AnimatePresence>
      {state.isOpen && (
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
              value={state.title}
              isActive={state.isTitle}
              onChange={(ev) => dispatch(handleTitle(ev.currentTarget.value))}
            />
            <Input
              isContent
              label="Content"
              value={state.content}
              isActive={state.isContent}
              onChange={(ev) => dispatch(handleContent(ev.currentTarget.value))}
            />

            <div className="buttons">
              <Button onClick={handleClose} variant="white" isActive>Cancel</Button>
              <Button onClick={handleSubmit} variant="green" isActive={state.isContent && state.isTitle ? true : false}>Save</Button>
            </div>
          </motion.div>
        </StyledUpdateModal>
      )}
    </AnimatePresence>
  )
}