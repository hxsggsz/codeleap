import { configureStore } from "@reduxjs/toolkit";
import sliceDeleteModal from "./sliceDeleteModal";
import sliceUpdateModal from "./sliceUpdateModal";

export const store = configureStore({
  reducer: {
    sliceDeleteModal,
    sliceUpdateModal,
  },
}) 

export type RootState = ReturnType<typeof store.getState>
