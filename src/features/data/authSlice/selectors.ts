import { createSelector } from "@reduxjs/toolkit";
import { appSelector } from "../../../store";

export const selectLoggedUser = createSelector(
  appSelector,
  state => state.data.auth.loggedUser
)