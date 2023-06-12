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
				<Script type="module" strategy="afterInteractive" id="FireBase-console">
					{`
            import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

            const firebaseConfig = {
              apiKey: "AIzaSyAF9gUXamrzAo5yAQ8TTOt5j-OVXGeKsU0",
              authDomain: "learn-nextjs-375b2.firebaseapp.com",
              projectId: "learn-nextjs-375b2",
              storageBucket: "learn-nextjs-375b2.appspot.com",
              messagingSenderId: "246783941907",
              appId: "1:246783941907:web:cc56ffae4c9d381019cee6",
              measurementId: "G-JY9NN5F8YY"
            };

            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
          `}
				</Script>
			</body>
		</Html>
	)
}
