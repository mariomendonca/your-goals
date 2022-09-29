import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from './firebase'

const auth = getAuth(app)

export async function loginWithEmailAndPassword(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then(res => console.log(res.user.email))
    .catch(err => console.error(err))
}
