import { Html, Main, NextScript } from "next/document"
import Head from "next/head"
import Script from "next/script"

export default function Document() {
	return (
		<Html lang="en">
      <Head>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" defer></script>
        <Script
          id="show-banner"
          dangerouslySetInnerHTML={{
            __html: `
              var OneSignal = window.OneSignal || [];
              var initConfig = {
                  appId: "0c6e02bd-ad9d-4288-82be-b6b320b145f9",
                  notifyButton: {
                      enable: true
                  },
              };
              OneSignal.push(function () {
                  OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/onesignal/' };
                  OneSignal.SERVICE_WORKER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
                  OneSignal.SERVICE_WORKER_UPDATER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
                  OneSignal.init(initConfig);
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
