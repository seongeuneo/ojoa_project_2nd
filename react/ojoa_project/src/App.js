import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TopButton from './components/TopButton';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Store from './pages/Store/Store';
import Order from './pages/Order/Order';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import {Chair, Bed, Sofa, Closet, Bookshelf, Lighting} from './pages/ProductList/ProductList';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Info from './pages/Join/Info';
import Agree from './pages/Join/Agree';
import Popup from './pages/Join/Popup';
import Qna from './pages/Qna/Qna';
import Mileage from './pages/MyPage/MyShop/Mileage';






function App() {
   //장바구니
   const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/mypage/Mileage*" element={<Mileage />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="/order/*" element={<Order />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/" element={<Main />} />
          <Route path="/productDetail/:mockList_id/*" element={<ProductDetail cart={cart} setCart={setCart}/>} />
          <Route path="/productList/Chair/*" element={<Chair cart={cart} setCart={setCart}/> } />
          <Route path="/productList/Sofa/*" element={<Sofa cart={cart} setCart={setCart}/> } />
          <Route path="/productList/Bed/*" element={<Bed cart={cart} setCart={setCart}/> } />
          <Route path="/productList/Bookshelf/*" element={<Bookshelf cart={cart} setCart={setCart}/> } />
          <Route path="/productList/Closet/*" element={<Closet cart={cart} setCart={setCart}/> } />
          <Route path="/productList/Lighting/*" element={<Lighting cart={cart} setCart={setCart}/> } />
          <Route path="/login/info" element={<Info />} />
          <Route path="/login/info/agree" element={<Agree />} />
          <Route path="/login/info/agree/popup" element={<Popup />} />
          <Route path="/qna" element={<Qna />} />

        </Routes>
        <Footer />
        <TopButton />
      </BrowserRouter>
    </div >
  );
};

export default App;