import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDq0tC1J6FwLp8LhgjWiYNi0Iyay4bodZY',
  authDomain: 'your-goals-5a68c.firebaseapp.com',
  projectId: 'your-goals-5a68c',
  storageBucket: 'your-goals-5a68c.appspot.com',
  messagingSenderId: '239922266309',
  appId: '1:239922266309:web:bfe277d59633ec43afb0ac',
  measurementId: 'G-X0RDW8VF1N'
}

// if (!getApps().length) {
// initializeApp(firebaseConfig)
// }

export const app = initializeApp(firebaseConfig)
