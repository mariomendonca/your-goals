import { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_500Medium,
  useFonts
} from '@expo-google-fonts/nunito'

import { Home } from './src/Home';

SplashScreen.preventAutoHideAsync();

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


  if (!isFontsLoaded) {
    return null
  }

  return (
    <Home />
  )
}
