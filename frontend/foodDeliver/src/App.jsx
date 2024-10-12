import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import Cart from './Component/Pages/Cart/Cart';
import PlaceOrder from './Component/Pages/PlaceOrder/PlaceOrder';
import Footer from './Component/Footer/Footer';
import LoginPopup from './Component/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
