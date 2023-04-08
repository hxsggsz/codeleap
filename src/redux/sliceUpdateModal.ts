import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  title: "",
  content: "",
  isTitle: false,
  isContent: false,
  isOpen: false,
} 
const sliceUpdateModal = createSlice({
  name: "UpdateModal",
  initialState,
  reducers: {
    handleShowUpdate(state) {
      return {...state, isOpen: !state.isOpen}
    },

    handleTitle(state, action) {
      return {...state, title: action.payload, isTitle: state.title != "" ? true : false}
    },

    handleContent(state, action) {
      return {...state, content: action.payload, isContent: state.content != "" ? true : false}
    }
  }
})

export default sliceUpdateModal.reducer
export const {handleShowUpdate, handleContent, handleTitle} = sliceUpdateModal.actions