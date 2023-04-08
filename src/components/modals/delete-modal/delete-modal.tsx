import { Dispatch, SetStateAction } from "react"
import { StyledDeleteModal } from "."
import { Text } from "../../Text/text"
import { Button } from "../../button/button"
import { useSearchParams } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

type DeleteModalTypes = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  deletePost: () => void
}

export const DeleteModal = ({ isOpen, setIsOpen, deletePost }: DeleteModalTypes) => {
  let [_, setSearchParams] = useSearchParams()

  function handleClose() {
    setIsOpen(false)
    setSearchParams({})
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledDeleteModal>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "tween" }}
            className="card"
          >
            <Text size="lg">Are you sure you want to delete this item?</Text>

            <div className="buttons">
              <Button onClick={handleClose} variant="white" isActive>Cancel</Button>
              <Button onClick={deletePost} variant="red" isActive>Delete</Button>
            </div>
          </motion.div>
        </StyledDeleteModal>
      )}
    </AnimatePresence>
  )
}