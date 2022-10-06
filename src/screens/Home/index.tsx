import { signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import { auth } from '../../lib/firebase'
import { logout } from '../../lib/store'
import { Container } from './styles'

export function Home() {
  const dispatch = useDispatch()

  async function handleSignout() {
    signOut(auth)
    dispatch(logout())
  }

  return (
    <Container>
      <Button label='Logout' onPress={handleSignout} />
    </Container>
  )
}