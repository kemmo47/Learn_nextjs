import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" strategy="beforeInteractive" />
				<Script src="/OneSignalSDKWorker.js" strategy="beforeInteractive" />
				<Script strategy="beforeInteractive" id="show-banner" type="module">
					{`
            window.OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
              OneSignal.init({
                appId: "0fd064f7-05f1-48ec-bf84-ce92c46ac572",
              });
            });
          `}
				</Script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
