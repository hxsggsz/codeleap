import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: true
} 

const slicePostModal = createSlice({
  name: "PostModal",
  initialState,
  reducers: {
    handleShowPostModal(state) {
      return {isOpen: !state.isOpen}
    }
  }
})

export default slicePostModal.reducer
export const {handleShowPostModal} = slicePostModal.actions