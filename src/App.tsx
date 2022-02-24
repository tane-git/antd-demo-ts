import React, { FC } from 'react';
import './App.css';
import { Grants } from './components';
import { Nav } from './components/Nav';

const App: FC = () => (
  <div className="App">
    <Nav />
    <Grants />
  </div>
);

export default App;