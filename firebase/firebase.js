import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { initializeApp } from 'firebase/app'

const clientCredentials = {
  apiKey: 'AIzaSyC2W-r6k25wcRXyJpBK2hZ8JAlg-kxaguA',
  authDomain: 'db-mail-fd503.firebaseapp.com',
  projectId: 'db-mail-fd503',
  storageBucket: 'db-mail-fd503.appspot.com',
  messagingSenderId: '636515526633',
  appId: '1:636515526633:web:172aa17336931425048d78',
}
const app = initializeApp(clientCredentials)
console.log(app)
export default app
