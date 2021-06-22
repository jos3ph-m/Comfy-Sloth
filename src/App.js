import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import styled from 'styled-components';

const Button = styled.button`
  background: green;
  color: white;
`;

const Container = styled.div``;

function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>;<Button>click me</Button>
    </div>
  );
}

export default App;
