import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'

export type AuthRoutesProps = {
  Home: undefined
}

export function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator<AuthRoutesProps>()
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='Home' component={Home} />
    </Navigator>

  )
}
