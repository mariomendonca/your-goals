import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { onAuthStateChanged } from 'firebase/auth'

import { LoadingIndicator } from '../components/LoadingIndicator'
import { auth } from '../lib/firebase'
import { login, User } from '../lib/store'

import { AppRoutes } from './App.routes'
import { AuthRoutes } from './Auth.routes'

export type RoutesProps = {
  Login: undefined
  Home: undefined
}

export function Routes() {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user.value)

  async function handleVerifyUser() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userLoggedIn: User = {
          uid: user.uid,
          email: user.email!,
          avatar: 'hello',
          name: 'mario'
        }
        dispatch(login(userLoggedIn))
      }

      setIsLoading(false)
    })
  }

  useEffect(() => {
    handleVerifyUser()
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LoadingIndicator />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {user.uid ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  )
}
