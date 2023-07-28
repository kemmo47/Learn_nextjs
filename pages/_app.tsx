import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { OneSignalInit } from '@/components/OneSignalInit/OneSignalInit'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="theme-color" content="#ffccdc" />
			</Head>
			<Component {...pageProps} />
			<OneSignalInit />
		</>
	)
}
