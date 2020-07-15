import React from 'react';
import './App.css';
import NavBar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import GuestState from './context/guestContext/GuestState';

function App() {
  return (
    <GuestState>
      <div>
        <NavBar />
        <Home />
    </div>
    </GuestState>
  );
}

export default App;
