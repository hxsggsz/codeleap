import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  titleInput: "",
  contentInput: "",
  isTitleInput: false,
  isContentInput: false,
}
const sliceNewPost = createSlice({
  name: "UpdateModal",
  initialState,
  reducers: {
    handleTitleInput(state, action) {
      return { ...state, titleInput: action.payload, isTitleInput: state.titleInput !== "" ? true : false }
    },

    handleContentInput(state, action) {
      return { ...state, contentInput: action.payload, isContentInput: state.contentInput !== "" ? true : false }
    },

    clearInput(state) {
      return { ...state, titleInput: "", contentInput: "" }
    }
  }
})

export default sliceNewPost.reducer
export const { handleContentInput, handleTitleInput, clearInput } = sliceNewPost.actions