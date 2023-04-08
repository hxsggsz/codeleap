import { StyledDeleteModal } from "."
import { Text } from "../../Text/text"
import { Button } from "../../button/button"
import { RootState } from "../../../redux/store"
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import { handleShow } from "../../../redux/sliceDeleteModal"

type DeleteModalTypes = {
  deletePost(id: string): void
}

export const DeleteModal = ({ deletePost }: DeleteModalTypes) => {
  let [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get("delete")
  const { isOpen } = useSelector((state: RootState) => state.sliceDeleteModal)
  const dispatch = useDispatch()

  function handleClose() {
    dispatch(handleShow())
    setSearchParams({})
  }
  function handleDeletePost() {
    deletePost(id!)
    dispatch(handleShow())
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
              <Button onClick={handleDeletePost} variant="red" isActive>Delete</Button>
            </div>
          </motion.div>
        </StyledDeleteModal>
      )}
    </AnimatePresence>
  )
}