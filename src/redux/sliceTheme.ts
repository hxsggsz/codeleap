import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isDarkMode: true
} 

const sliceTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    handleTheme(state, action) {
      return {isDarkMode: !state.isDarkMode}
    }
  }
})

export default sliceTheme.reducer
export const {handleTheme} = sliceTheme.actions