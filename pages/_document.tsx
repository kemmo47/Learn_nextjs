import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Script strategy="afterInteractive" id="show-banner" type="module">
					{`
            importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
            importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

            const firebaseConfig = {
              apiKey: "AIzaSyDld-b90iV0aRO3-DdsVimNPVwAjsHqayE",
              authDomain: "laravel-engpush.firebaseapp.com",
              projectId: "laravel-engpush",
              storageBucket: "laravel-engpush.appspot.com",
              messagingSenderId: "1083444428026",
              appId: "1:1083444428026:web:4eb4431f2630086f281d43"
            };

            firebase.initializeApp(firebaseConfig);
            const messaging = firebase.messaging();
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
