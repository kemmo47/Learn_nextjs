import type { FirebaseApp } from 'firebase/app'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyDld-b90iV0aRO3-DdsVimNPVwAjsHqayE',
	authDomain: 'laravel-engpush.firebaseapp.com',
	projectId: 'laravel-engpush',
	storageBucket: 'laravel-engpush.appspot.com',
	messagingSenderId: '1083444428026',
	appId: '1:1083444428026:web:4eb4431f2630086f281d43',
}

const FIREBASE_APP: FirebaseApp = initializeApp(firebaseConfig)

export default FIREBASE_APP
