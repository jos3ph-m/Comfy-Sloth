import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import styled from 'styled-components';

function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      <Button>click me</Button>
      <Container>
        <div>
          <h3>hello world</h3>
        </div>
        <div className="hero">hero text</div>
      </Container>
      <Container2>
        <div>
          <h3>hello world</h3>
        </div>
        <div className="hero">hero text</div>
      </Container2>
    </div>
  );
}

export default App;
