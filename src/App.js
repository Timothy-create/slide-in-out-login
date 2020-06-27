import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import FrontPage2 from './components/Frontpage/FrontPage2'

function App() {
  return (
    <div>
      <BrowserRouter>
        <FrontPage2 />
      </BrowserRouter>
    </div>
  );
}

export default App;
