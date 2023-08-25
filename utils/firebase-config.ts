import 'firebase/messaging'

import firebase from 'firebase/app'
// New import

const firebaseConfig = {
	apiKey: 'AIzaSyDld-b90iV0aRO3-DdsVimNPVwAjsHqayE',
	authDomain: 'laravel-engpush.firebaseapp.com',
	projectId: 'laravel-engpush',
	storageBucket: 'laravel-engpush.appspot.com',
	messagingSenderId: '1083444428026',
	appId: '1:1083444428026:web:4eb4431f2630086f281d43',
}

const app: any = firebase.initializeApp(firebaseConfig)
const messaging = app.messaging()

export default messaging
