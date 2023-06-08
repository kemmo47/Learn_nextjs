import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" defer />
				<Script
					id="OneSignal"
					dangerouslySetInnerHTML={{
						__html: `
              window.OneSignal = window.OneSignal || [];
              OneSignal.push(function() {
                OneSignal.init({
                  appId: "0c6e02bd-ad9d-4288-82be-b6b320b145f9",
                });
              });
            `,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
