import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Store from './pages/Store/Store';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
<<<<<<< HEAD
import TopButton from './components/TopButton';
=======
import Cart from './pages/Cart/Cart';
import Agree from './pages/Join/Agree';
>>>>>>> main

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/store/*" element={<Store />} />
<<<<<<< HEAD
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <TopButton />
=======
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/login/info/agree" element={<Agree />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
>>>>>>> main
      </BrowserRouter>
    </div>
  );
};

export default App;