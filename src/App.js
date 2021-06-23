import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import Testing from './Testing';

function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      <Testing />
    </div>
  );
}

export default App;
