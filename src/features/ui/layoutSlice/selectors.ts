import { createSelector } from "@reduxjs/toolkit"
import { appSelector } from "../../../store"

export const selectIsLoading = createSelector(
  appSelector,
  state => state.ui.layout.loading
)