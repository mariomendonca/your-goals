import { Text } from 'react-native'
import styled from 'styled-components/native'
import { fonts } from './global/fonts'

export function Home() {
  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: fonts.bold, fontSize: 26 }}>
        Your goals
      </Text>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.primary}
`
