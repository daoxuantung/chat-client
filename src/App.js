import React from 'react';
import './App.scss';
import { SocketProvider } from './contexts/socket';
import Router from './routes/router';

function App() {
  return (
    <SocketProvider>
      <div className="App">
        <Router />
      </div >
    </SocketProvider>
  );
}

export default App;
