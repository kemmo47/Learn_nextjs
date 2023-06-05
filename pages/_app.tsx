import "../styles/globals.css"
import Head from "next/head"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="roXUnA09_bunaG-lckoRo92P5dtokt1Q5Jrd8VmEOI4" />
				<meta name="theme-color" content="#ffccdc" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
