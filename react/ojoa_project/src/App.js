import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Store from './pages/Store/Store';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import TopButton from './components/TopButton';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <TopButton />
      </BrowserRouter>
    </div>
  );
};

export default App;