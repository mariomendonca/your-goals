import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { useCallback, useEffect, useMemo } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { Provider } from 'react-redux'

import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_500Medium,
  useFonts
} from '@expo-google-fonts/nunito'

import { colors } from './src/global/colors'
import { Routes } from './src/routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { store } from './src/lib/store'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [isFontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold
  })

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [isFontsLoaded])

  useEffect(() => {
    if (!isFontsLoaded) return

    hideSplash()
  }, [isFontsLoaded])

  const colorScheme = useColorScheme()
  const theme = useMemo(() => colorScheme === 'light' ? 'light' : 'dark', [colorScheme])

  if (!isFontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={colors(theme)}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}
