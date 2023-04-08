import { configureStore } from "@reduxjs/toolkit";
import sliceTheme from "./sliceTheme";
import sliceDeleteModal from "./sliceDeleteModal";
import sliceUpdateModal from "./sliceUpdateModal";
import slicePostModal from "./slicePostModal";

export const store = configureStore({
  reducer: {
    sliceTheme,
    slicePostModal,
    sliceDeleteModal,
    sliceUpdateModal,
  },
}) 

export type RootState = ReturnType<typeof store.getState>
