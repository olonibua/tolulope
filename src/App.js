import React from 'react'
import { Themeprovider } from './context/ThemeContext';

import './App.css';

import Home from './Component/Home';



function App() {
  
  return <Themeprovider>
    <Home />

  </Themeprovider>

}

export default App;
