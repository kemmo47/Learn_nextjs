import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-CRFMR28XCQ"></Script>
				<Script strategy="beforeInteractive" id="OneSignal">
					{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CRFMR28XCQ');`}
				</Script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
