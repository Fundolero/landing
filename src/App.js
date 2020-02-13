import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './config/root';


function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
