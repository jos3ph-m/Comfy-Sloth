import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import styled from 'styled-components';

const Button = styled.button`
  background: green;
  color: white;
`;

function App() {
  return <h4>comfy sloth starter</h4>;
}

export default App;
