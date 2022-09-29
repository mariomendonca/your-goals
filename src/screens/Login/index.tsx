import { TouchableOpacity, View } from 'react-native'

import { Button } from '../../components/Button'
import { Container, Content, AdviceButton, AdviceText, ModalContainer, Subtitle, Title } from './styles'
import LoginSVG from '../../assets/login.svg'
import { StackScreenProps } from '@react-navigation/stack'
import { RoutesProps } from '../../routes'
import { Modal } from '../../components/Modal'
import { useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { Input } from '../../components/Input'
import { Octicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { loginWithEmailAndPassword } from '../../services/user'

type Props = StackScreenProps<RoutesProps, 'Login'>

export function Login({ navigation }: Props) {
  const colors = useTheme()
  const modalRef = useRef<BottomSheet>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    await loginWithEmailAndPassword(email, password)

  }


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
        snapPoints={['80%']}
      >
        <ModalContainer>
          <Title>Your account</Title>
          <Input
            placeholder='Email'
            onChangeText={setEmail}
            value={email}
            autoCapitalize='none'
          />
          <Input
            placeholder='Password'
            onChangeText={setPassword}
            value={password}
            mTop='20px'
            secureTextEntry={!isPasswordVisible}
            onIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
            Icon={!isPasswordVisible ? (
              <Octicons name='eye' size={26} color={colors.primary} />
            ) : (

              <Octicons name='eye-closed' size={26} color={colors.primary} />
            )}
          />
          <AdviceButton>
            <AdviceText>
              Forgot password
            </AdviceText>
          </AdviceButton>
          <Button
            mTop='40px'
            mBottom='20px'
            label='Login'
            onPress={handleLogin}
          />

          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <AdviceText>
              Create Account
            </AdviceText>
          </TouchableOpacity>
          <Button
            mTop='40px'
            label='Login with Google'
          />

        </ModalContainer>
      </Modal>
    </Container>
  )
}
