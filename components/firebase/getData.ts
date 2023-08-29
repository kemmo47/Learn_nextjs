import { doc, getDoc, getFirestore } from 'firebase/firestore'

import FIREBASE_APP from '@/utils/config'

const db = getFirestore(FIREBASE_APP)
export default async function getDoument(collection: string, id: string) {
	let docRef = doc(db, collection, id)

	let result = null
	let error = null

	try {
		result = await getDoc(docRef)
	} catch (e) {
		error = e
	}

	return { result, error }
}
