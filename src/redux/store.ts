import { configureStore } from "@reduxjs/toolkit";
import sliceDeleteModal from "./sliceDeleteModal";
import sliceUpdateModal from "./sliceUpdateModal";
import sliceNewPost from "./sliceNewPost";

export const store = configureStore({
  reducer: {
    sliceNewPost,
    sliceDeleteModal,
    sliceUpdateModal,
  },
}) 

export type RootState = ReturnType<typeof store.getState>
