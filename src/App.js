import React from 'react'
import { Themeprovider } from './Context/ThemeContext';

import './App.css';

import Home from './Component/Home';



function App() {
  
  return <Themeprovider>
    <Home />

  </Themeprovider>

}

export default App;
