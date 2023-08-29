/* eslint-disable @typescript-eslint/no-shadow */
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'

import FIREBASE_APP from '@/utils/config'

const auth = getAuth(FIREBASE_APP)

export const AuthContext = React.createContext({})

export const useAuthContext = () => React.useContext(AuthContext)

export const AuthContextProvider = ({ children }: any) => {
	const [user, setUser] = React.useState(null)
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user: any) => {
			if (user) {
				setUser(user)
			} else {
				setUser(null)
			}
			setLoading(false)
		})

		return () => unsubscribe()
	}, [])

	return (
		<AuthContext.Provider value={{ user }}>
			{loading ? <div>Loading...</div> : children}
		</AuthContext.Provider>
	)
}
