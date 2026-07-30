import { useState, useEffect } from 'react';
import "./styles/global.scss";
import Navbar from './components/navbar/Navbar'
import Offers from './components/offers/Offers'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Offers />
        </div >
      </div>
    </>
  );
}

export default App;
