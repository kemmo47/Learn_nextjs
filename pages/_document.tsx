import { Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<body>
				<Main />
				<NextScript />

				<Script id="show-banner">
					{`  // Import the functions you need from the SDKs you need
          import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
          import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
          // TODO: Add SDKs for Firebase products that you want to use
          // https://firebase.google.com/docs/web/setup#available-libraries

          // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const firebaseConfig = {
            apiKey: "AIzaSyAF9gUXamrzAo5yAQ8TTOt5j-OVXGeKsU0",
            authDomain: "learn-nextjs-375b2.firebaseapp.com",
            projectId: "learn-nextjs-375b2",
            storageBucket: "learn-nextjs-375b2.appspot.com",
            messagingSenderId: "246783941907",
            appId: "1:246783941907:web:cc56ffae4c9d381019cee6",
            measurementId: "G-JY9NN5F8YY"
          };

          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);`}
				</Script>
			</body>
		</Html>
	)
}
