import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TopButton from './components/TopButton';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Store from './pages/Store/Store';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Qna from './pages/Qna/Qna';
import Cart from './pages/Cart/Cart';
import Info from './pages/Join/Info';
import Agree from './pages/Join/Agree';
import Popup from './pages/Join/Popup';
import Mileage from './pages/MyPage/MyShop/Mileage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/mypage/Mileage*" element={<Mileage />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="/order/*" element={<Order />} />
          <Route path="/productList/*" element={<ProductList />} />
          <Route path="/productDetail/*" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/qna/*" element={<Qna />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/" element={<Main />} />
          <Route path="/productDetail/*" element={<ProductDetail />} />
          <Route path="/productList/*" element={<ProductList />} />
          <Route path="/login/info" element={<Info />} />
          <Route path="/login/info/agree" element={<Agree />} />
          <Route path="/login/info/agree/popup" element={<Popup />} />
        </Routes>
        <Footer />
        <TopButton />
      </BrowserRouter>
    </div >
  );
};

export default App;