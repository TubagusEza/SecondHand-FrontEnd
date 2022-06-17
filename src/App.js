import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './styles/App.css';
// import HomeNavbar from './components/Navbar/HomeNavbar'
import SellerProductPage from './components/Seller/Carousel/Carousel'
import BuyerProductPage from './components/Buyer/Carousel/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
       <Routes>
       <Route path='/seller/product/:id' element={<SellerProductPage />} />
       <Route path='/buyer/product/:id' element={<BuyerProductPage />} />
       </Routes>
      </BrowserRouter>
  )
}

export default App;
