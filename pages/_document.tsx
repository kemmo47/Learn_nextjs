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

            messaging.requestPermission().then(() => {
              console.log("Notification permission granted.");
              // You can now use messaging.getToken() to get the device token.
            }).catch((err) => {
              console.log("Unable to get permission to notify.", err);
            });

            messaging.getToken().then((currentToken) => {
              if (currentToken) {
                console.log("Device token:", currentToken);
              } else {
                console.log("No registration token available.");
              }
            }).catch((err) => {
              console.log("An error occurred while retrieving token.", err);
            });

            messaging.onMessage((payload) => {
              console.log("Message received:", payload);
              // Handle the notification here (e.g., show a notification to the user).
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
