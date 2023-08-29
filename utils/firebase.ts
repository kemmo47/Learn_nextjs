// firebase.ts
import { getFirestore } from 'firebase/firestore'

import FIREBASE_APP from './config' // Make sure this is properly configured

const db = getFirestore(FIREBASE_APP)

export default db
