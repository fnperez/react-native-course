import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutState } from "./types";

const initialState: LayoutState = {
  loading: false
}

const layoutSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    showLoader: (state, action: PayloadAction<LayoutState['loading']>) => {
      state.loading = action.payload
    }
  }
})

export const { showLoader } = layoutSlice.actions

export default layoutSlice.reducer