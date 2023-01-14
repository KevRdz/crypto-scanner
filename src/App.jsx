import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CoinPage from './pages/CoinPage/CoinPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/coins:id' element={<CoinPage />} />
      </Routes>
    </>
  );
}

export default App;
