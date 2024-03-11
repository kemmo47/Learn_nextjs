import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import favicon from './../public/favicon.ico'
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href={favicon.src} />
				<meta name="theme-color" content="#CDEDFE" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
