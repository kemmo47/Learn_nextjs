import 'firebase/compat/messaging'

import firebase from 'firebase/compat/app'

import { firebaseConfig } from './constants'

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
} else {
	firebase.app()
}
let messaging: firebase.messaging.Messaging

if (typeof window !== 'undefined') {
	if (firebase.messaging.isSupported()) {
		messaging = firebase.messaging()
	}
}

export const getMessagingToken = async () => {
	let currentToken = ''
	if (!messaging) return
	try {
		currentToken = await messaging.getToken({
			vapidKey: process.env.REACT_APP_FIREBASE_FCM_VAPID_KEY,
		})
		console.log('FCM registration token', currentToken)
	} catch (error) {
		console.log('An error occurred while retrieving token. ', error)
	}
	return currentToken
}

export const onMessageListener = () =>
	new Promise((resolve) => {
		messaging.onMessage((payload: unknown) => {
			resolve(payload)
		})
	})
