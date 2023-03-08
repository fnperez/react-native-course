import type SCREENS from '@/navigation/screens'

export type UnauthenticatedNavigatorParamList = {
  [SCREENS.LOGIN]: undefined
  [SCREENS.ONBOARDING]: undefined
  [SCREENS.WELCOME]: undefined
  [SCREENS.REGISTER]: undefined
}

export type AuthenticatedNavigatorParamList = {
  [SCREENS.HOME]: undefined
}
