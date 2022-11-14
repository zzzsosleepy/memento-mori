import React from 'react'
import './navbar.css';

const Navbar = () => {

    const openLinksMenu = () => {
        document.querySelector('.navbar-links').classList.toggle('hidden');
    }
    return (
        <div className="navbar">
            <div className="navbar-header">Memento Mori 💀</div>
            <div className="avatarSection">
                <div className="navbar-username">Jeffrey</div>
                <img className="avatarImg" src="./images/avatar01.png" onClick={openLinksMenu}></img>
                {/* When clicking your avatar, a links menu should open */}
                <div className="navbar-links hidden">
                    <a href="#">Home</a>
                    <a href="#">Profile</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar