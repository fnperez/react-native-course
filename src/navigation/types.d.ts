import SCREENS from "./screens"

export type UnauthenticatedNavigatorParamList = {
  [SCREENS.ONBOARDING]: undefined
  [SCREENS.WELCOME]: undefined
  [SCREENS.LOGIN]: undefined
  [SCREENS.REGISTER]: undefined
}

export type AuthenticatedNavigatorParamList = {
  [SCREENS.HOME]: undefined
}