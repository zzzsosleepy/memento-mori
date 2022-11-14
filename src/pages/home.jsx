import React, { useRef } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore';
import './home.css';

export default function Home() {
    const messageRef = useRef();
    const ref = collection(firestore, "messages");

    const handleSave = async (e) => {
        e.preventDefault();
        let data = {
            message: messageRef.current.value,
        };

        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="home-page">
            <h2>Welcome to</h2>
            <h1>💀 Memento Mori 💀</h1>
            <hr className="line-separator" />
            <form onSubmit={handleSave}>
                <label>Email Address</label>
                <input type="text" ref={messageRef} />
                <label>Password</label>
                <input type="password" ref={messageRef} />
                <button type="submit">Login</button>
                <hr />
                {/* Don't have an account? Sign up */}
                <label>Don't have an account?</label>
                <button>Sign up</button>
            </form>
        </div>
    );
}