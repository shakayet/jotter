import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAs7V3-jCKqMIphdDQD6tHm5CyH9bzATKg",
    authDomain: "jotter-a4e39.firebaseapp.com",
    projectId: "jotter-a4e39",
    storageBucket: "jotter-a4e39.firebasestorage.app",
    messagingSenderId: "56825929593",
    appId: "1:56825929593:web:9652451734acf90c50d9a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;  // Default export of app
export { auth };  // Named export for auth
