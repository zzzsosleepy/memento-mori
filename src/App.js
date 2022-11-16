import './App.css';
import Home from './pages/home.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Hand from './components/Hand/hand.jsx';
// import state
import React, { useState } from 'react';

function App() {
  // State for which page to display
  const [page, setPage] = useState('home');

  function loginSuccessful(userEmail) {
    console.log('Login Successful by ' + userEmail);
    setPage('hand');
    console.log(page);
  }
  return (
    <div className="App">
      <Navbar />
      {page === 'home' ? <Home loginSuccessful={loginSuccessful} /> : null}
      {page === 'hand' ? <Hand /> : null}
    </div>
  );
}

export default App;
