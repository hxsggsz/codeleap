import { Dispatch, SetStateAction } from "react"
import { StyledDeleteModal } from "."
import { Text } from "../../Text/text"
import { Button } from "../../button/button"
import { useSearchParams } from "react-router-dom"

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
    <>
      {isOpen && (
        <StyledDeleteModal>
          <div className="card">
            <Text size="lg">Are you sure you want to delete this item?</Text>

            <div className="buttons">
              <Button onClick={handleClose} variant="white" isActive>Cancel</Button>
              <Button onClick={deletePost} variant="red" isActive>Delete</Button>
            </div>
          </div>
        </StyledDeleteModal>
      )}
    </>
  )
}