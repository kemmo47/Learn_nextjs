import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import FIREBASE_APP from '@/utils/config'

const auth = getAuth(FIREBASE_APP)

export default async function signUp(email: string, password: string) {
	let result = null,
		error = null
	try {
		result = await createUserWithEmailAndPassword(auth, email, password)
	} catch (e) {
		error = e
	}

	return { result, error }
}
