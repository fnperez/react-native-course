import theme from '../theme'
import SCREENS from './screens'
import { Home } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { AuthenticatedNavigatorParamList } from './types'

const Stack = createNativeStackNavigator<AuthenticatedNavigatorParamList>()

const AuthenticatedNavigator = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.HOME}
    screenOptions={{
      headerShown: true,
      headerTintColor: theme.colors.white,
      headerTitle: '',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: theme.colors.surface,
      },
    }}>
    <Stack.Screen name={SCREENS.HOME} component={Home} />
  </Stack.Navigator>
)

export default AuthenticatedNavigator
