import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_500Medium,
  useFonts
} from '@expo-google-fonts/nunito'
import { Home } from './src/Home';

export default function App() {
  const [isFontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold
  })

  return (
    <Home />
  )
}
