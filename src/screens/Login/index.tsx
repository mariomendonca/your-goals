import { View } from 'react-native'

import { Button } from '../../components/Button'
import { Container, Content, ModalContainer, Subtitle, Title } from './styles'
import LoginSVG from '../../assets/login.svg'
import { StackScreenProps } from '@react-navigation/stack'
import { RoutesProps } from '../../routes'
import { Modal } from '../../components/Modal'
import { useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'

type Props = StackScreenProps<RoutesProps, 'Login'>

export function Login({ navigation }: Props) {
  const modalRef = useRef<BottomSheet>(null)

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

        <Button
          label='Login'
          // onPress={() => navigation.navigate('Home')}
          onPress={() => modalRef.current?.expand()}
        />
      </Content>

      <Modal
        reference={modalRef}
        index={-1}
        enablePanDownToClose={true}
        snapPoints={['70%']}
      >
        <ModalContainer>

        </ModalContainer>
      </Modal>
    </Container>
  )
}
