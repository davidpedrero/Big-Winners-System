import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Profile />
      <Login />
      {/* <Dashboard /> */}
    </>
  );
}

export default App;