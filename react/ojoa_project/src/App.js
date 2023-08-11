import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Store from './pages/Store/Store';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
<<<<<<< HEAD
import Login from './pages/Login/Login';
import Qna from './pages/Qna/Qna';
import Title from './components/Title/Title';
// import Title from './pages/Title/Title';


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
          <Route path="/login/*" element={<Login />} />
          <Route path="/qna/*" element={<Qna />} />
=======
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/login/info/agree" element={<Agree />} />
          <Route path="*" element={<NotFound />} />
>>>>>>> main
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;