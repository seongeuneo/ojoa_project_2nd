import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Store from './pages/Store/Store';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import TopButton from './components/TopButton';
import Cart from './pages/Cart/Cart';
import Agree from './pages/Join/Agree';




function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="/Order/*" element={<Order />} />
          <Route path="/ProductList/*" element={<ProductList />} />
          <Route path="/ProductDetail/*" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/login/info/agree" element={<Agree />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};


export default App;