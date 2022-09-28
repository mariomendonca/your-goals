import { Text, View } from 'react-native'
import { fonts } from './global/fonts'

export function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: fonts.bold, fontSize: 26 }}>
        Your goals
      </Text>
    </View>
  )
}