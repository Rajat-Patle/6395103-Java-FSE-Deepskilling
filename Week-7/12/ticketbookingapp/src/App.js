import React, { useState } from 'react';
import Login from './Login';
import Signup from './signup_page';
import Welcome from './Welcome';

function App() {
  const [currentPage, setCurrentPage] = useState('signup'); 

  const handleLogin = () => {
    setCurrentPage('welcome');
  };

  const handleSignup = () => {
    setCurrentPage('login');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {currentPage === 'signup' && <Signup onSignup={handleSignup} />}
      {currentPage === 'login' && <Login onLogin={handleLogin} />}
      {currentPage === 'welcome' && <Welcome onLogout={handleLogout} />}
    </div>
  );
}

export default App;
