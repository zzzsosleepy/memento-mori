import './App.css';
import Home from './pages/home.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Hand from './components/Hand/hand.jsx';
// import state
import React, { useState } from 'react';

function App() {
  // State for which page to display
  const [page, setPage] = useState('home');
  const [userAcc, setUserAcc] = useState();

  // Reload the app component when userAcc is set
  React.useEffect(() => {
    console.log('userAcc', userAcc);
    setPage('hand');
  }, [userAcc]);


  function loginSuccessful(user) {
    setUserAcc(user);
    console.log('Login Successful by ' + userAcc.providerData[0].displayName);
    console.log(page);
  }
  return (
    <div className="App">
      {userAcc == undefined ? <Navbar user={{ email: 'Guest' }} /> : <Navbar user={userAcc} />}
      {page === 'home' ? <Home loginSuccessful={loginSuccessful} /> : null}
      {page === 'hand' ? <Hand /> : null}
    </div>
  );
}

export default App;
