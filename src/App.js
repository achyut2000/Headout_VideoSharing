import React from 'react';
import './App.css'
import Landing from './component/Landing';
import { Carousal } from './component/Carousal';
import { Popular }  from './component/Popular';
import Copyright from './image/copyright.jpg';

function App() {
  return (
    <React.Fragment>
      <Landing />
      <div class="main">
          <Carousal />
          <Popular />
          <div class="footer">
            <span><img src={Copyright} height="20px" width="20px"/>SHAREVEO</span>
          </div>
      </div>
    </React.Fragment>
  );
}

export default App;
