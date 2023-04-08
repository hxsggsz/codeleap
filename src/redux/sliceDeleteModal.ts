import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false
} 
const sliceDeleteModal = createSlice({
  name: "DeleteModal",
  initialState,
  reducers: {
    handleShow(state) {
      return {isOpen: !state.isOpen}
    }
  }
})

export default sliceDeleteModal.reducer
export const {handleShow} = sliceDeleteModal.actions