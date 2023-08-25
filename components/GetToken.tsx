import React, { useEffect } from 'react'

import messaging from '../utils/firebase-config'

const GetToken = () => {
	useEffect(() => {
		messaging
			.getToken()
			.then((token: any) => {
				console.log('USER_DEVICE_TOKEN:', token)
			})
			.catch((error: any) => {
				console.error('Error getting user token:', error)
			})
	}, [])

	return <p>get tokenb</p>
}

export default GetToken
