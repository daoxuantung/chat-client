import React from 'react';
import io from 'socket.io-client';
import './App.scss';
import Router from './routes/router';

function App() {
  const token = localStorage.getItem('token');
  const socket = io('http://localhost:8000/', {
    query: {
      token
    }
  });

  return (
    <div className="App">
      <Router socket={socket} />
    </div >
  );
}

export default App;
