import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" defer></Script>

				<Script strategy="beforeInteractive" id="OneSignal">
					{`
            window.OneSignal = window.OneSignal || [];
            OneSignal.initialize({
              appId: '0c6e02bd-ad9d-4288-82be-b6b320b145f9',
            }).then(function () {
              OneSignal.push(['addListener', 'notificationPermission', function (permission) {
                console.log('Permission:', permission);
              }]);
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
