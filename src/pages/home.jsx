import React, { useRef } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore';
import './home.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ImGoogle3 } from 'react-icons/im';



export default function Home({ loginSuccessful }) {
    // const messageRef = useRef();
    // const ref = collection(firestore, "messages");

    // const handleSave = async (e) => {
    //     e.preventDefault();
    //     let data = {
    //         message: messageRef.current.value,
    //     };

    //     try {
    //         addDoc(ref, data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // Handle firebase authentication with google
    function handleSignin(e) {
        e.preventDefault();
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user.email + " signed in");
                // call the loginSuccess function after the user has signed in
                loginSuccessful(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode + ": " + errorMessage);
                // ...
            });
    }



    return (
        <div className="home-page">
            <div className="dark-overlay"></div>
            <h2>Welcome to</h2>
            <h1>💀 Memento Mori 💀</h1>
            <hr className="line-separator" />
            <form onSubmit={handleSignin}>
                {/* <label>Email Address</label>
                <input type="text" ref={messageRef} />
                <label>Password</label>
            <input type="password" ref={messageRef} /> */}
                <label>Log In</label>
                <button type="submit"><ImGoogle3 className="googleLogo" /> Sign in with Google</button>
                <hr />
                {/* Don't have an account? Sign up */}
                <label>Don't have an account?</label>
                <button>Sign up</button>
            </form>
        </div>
    );
}