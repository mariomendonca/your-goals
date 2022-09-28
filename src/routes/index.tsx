import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Login } from '../screens/Login'

export type RoutesProps = {
  Login: undefined
  Home: undefined
}

export function Routes() {
  const { Navigator, Screen } = createStackNavigator<RoutesProps>()
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false
      }}>
        <Screen name='Login' component={Login} />
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}
