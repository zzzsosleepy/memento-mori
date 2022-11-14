import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDE05ERjoi9YRIztdeXsF47hAGFNyY70Ls",
    authDomain: "memento-mori-efdcb.firebaseapp.com",
    projectId: "memento-mori-efdcb",
    storageBucket: "memento-mori-efdcb.appspot.com",
    messagingSenderId: "735952688897",
    appId: "1:735952688897:web:8bacf7876255fe119dad00",
    measurementId: "G-YTX0QKDGFB"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

