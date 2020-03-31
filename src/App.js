import React from 'react';
import './App.css'
import Landing from './component/Landing';
import { Carousal } from './component/Carousal';

function App() {
  return (
    <div>
      <Landing />
      <div class="main">
          <Carousal />
      </div>
    </div>
  );
}

export default App;
