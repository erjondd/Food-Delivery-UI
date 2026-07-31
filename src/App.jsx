import { useState, useEffect } from 'react';
import "./styles/global.scss";
import Navbar from './components/navbar/Navbar'
import Categroy from './components/categories/Categroy'
import Offers from './components/offers/Offers'
import Restaurants from './components/restaurants/Restaurants'


function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Offers />
          <Categroy />
          <Restaurants />
        </div >
      </div>
    </>
  );
}

export default App;
