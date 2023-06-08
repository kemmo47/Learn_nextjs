import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="google-site-verification"
					content="roXUnA09_bunaG-lckoRo92P5dtokt1Q5Jrd8VmEOI4"
				/>
				<meta name="theme-color" content="#ffccdc" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
