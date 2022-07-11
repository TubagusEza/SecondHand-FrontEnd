import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Homepage from './pages';
import Register from './pages/Register';
import Login from './pages/Login';
import InfoProfile from './pages/InfoProfile';
import InfoProduct from './pages/InfoProduct';
import UpdateProduct from './pages/UpdateProduct';
import SellerProduct from './pages/SellerProduct';
import SellerProductEdit from './pages/SellerProductEdit';
import BuyerProduct from './pages/BuyerProduct';
import ListProduct from './pages/ListProduct';
import HistorySeller from './pages/HistorySeller';
import HistoryBuyer from './pages/HistoryBuyer';
import OfferingInfo from './pages/OfferingInfo';
import OfferingAccept from './pages/OfferingAccept';
import ProductInterest from './pages/ProductInterest';
import Notification from './pages/Notification';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<InfoProfile />} />
          <Route path="/seller/sell" element={<InfoProduct />} />
          <Route path="/seller/product/:id/update" element={<UpdateProduct />} />
          <Route path="/seller/product/:id" element={<SellerProduct />} />
          <Route path="/seller/product/:id/preview" element={<SellerProductEdit />} />
          <Route path="/buyer/product/:id" element={<BuyerProduct />} />
          <Route path="/list/products" element={<ListProduct />} />
          <Route path="/list/interest" element={<ProductInterest />} />
          <Route path="/list/notifications" element={<Notification />} />
          <Route path="/history/seller" element={<HistorySeller />} />
          <Route path="/history/buyer" element={<HistoryBuyer />} />
          <Route path="/offering/info" element={<OfferingInfo />} />
          <Route path="/offering/accept" element={<OfferingAccept />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
