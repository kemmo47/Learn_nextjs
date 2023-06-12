import Head from 'next/head'
import { useEffect } from 'react'

import { Profile } from '@/components/Profile'
import { getMessagingToken, onMessageListener } from '@/utils/firebase'

export default function Home() {
	useEffect(() => {
		getMessagingToken()
	}, [])

	useEffect(() => {
		onMessageListener().then((data) => {
			console.log('Receive foreground: ', data)
		})
	}, [])

	return (
		<>
			<Head>
				<title>Lear Nextjs</title>
				<meta name="description" content="Generated by create next app" />
				<script src="https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js" defer></script>
				<link rel="icon" href="./favicon.ico" />
			</Head>
			<div>
				<h1>My Profile 2</h1>
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
			</div>
		</>
	)
}
