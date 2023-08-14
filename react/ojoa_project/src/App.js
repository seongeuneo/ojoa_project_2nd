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
import Login from './pages/Login/Login';
import Qna from './pages/Qna/Qna';
import Cart from './pages/Cart/Cart';
import Agree from './pages/Join/Agree';
import Nav from './components/Nav/Nav';
import Title from './components/Title/Title';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav /> {/* Nav 컴포넌트 랜더링 - 작은경로 */}
        <Title /> {/* Title 컴포넌트 랜더링 - 페이지별타이틀 */}
        <Routes>
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="/order/*" element={<Order />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/qna/*" element={<Qna />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/" element={<Main />} />
          <Route path="/productDetail/*" element={<ProductDetail />} />
          <Route path="/productList/*" element={<ProductList />} />
          <Route path="/login/info/agree" element={<Agree />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;