import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/Login'

export type AppRoutesProps = {
  Login: undefined
}

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator<AppRoutesProps>()
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='Login' component={Login} />
    </Navigator>

  )
}
