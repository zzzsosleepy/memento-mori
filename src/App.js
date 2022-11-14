import './App.css';
import Home from './pages/home.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Hand from './components/Hand/hand.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Hand />
    </div>
  );
}

export default App;
