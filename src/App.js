import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { Provider } from "react-redux";
import Profile from './pages/Profile'
import SellerProductPage from './pages/SellerProduct'
import BuyerProductPage from './pages/BuyerProduct'
import ListSell from './pages/ListSell';
import ButtonName from './components/Seller/Card/CardButtonName';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/seller/product/:id' element={<SellerProductPage />} />
          <Route path='/buyer/product/:id' element={<BuyerProductPage />} />
          <Route path="/side" element={<ListSell />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
