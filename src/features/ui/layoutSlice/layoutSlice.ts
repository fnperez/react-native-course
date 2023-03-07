import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { LayoutState } from './types.d'

const initialState: LayoutState = {
  loading: false,
}

const layoutSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    showLoader: (state, action: PayloadAction<LayoutState['loading']>) => {
      state.loading = action.payload
    },
  },
})

export const { showLoader } = layoutSlice.actions

export default layoutSlice.reducer
