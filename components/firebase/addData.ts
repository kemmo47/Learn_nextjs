import { doc, getFirestore, setDoc } from 'firebase/firestore'

import FIREBASE_APP from '@/utils/config'

const db = getFirestore(FIREBASE_APP)

export default async function addData(colllection: string, id: string, data: any) {
	let result = null
	let error = null

	try {
		result = await setDoc(doc(db, colllection, id), data, {
			merge: true,
		})
	} catch (e) {
		error = e
	}

	return { result, error }
}
