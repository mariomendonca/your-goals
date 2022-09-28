import { View } from 'react-native'
import { Button } from '../../components/Button'

import { Container, Content, Subtitle, Title } from './styles'
import LoginSVG from '../../assets/login.svg'

export function Home() {
  return (
    <Container>
      <Content>
        <View>
          <Title>
            Your Goals
          </Title>
          <Subtitle>
            Work better{'\n'}
            Be productive{'\n'}
            Reach your goals{'\n'}
          </Subtitle>
        </View>

        <LoginSVG height={250} />

        <Button label='Login' />
      </Content>
    </Container>
  )
}
