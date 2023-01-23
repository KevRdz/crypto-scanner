import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins/Coins';
import NavBar from './components/NavBar/NavBar';
import CoinPage from './pages/CoinPage/CoinPage';

function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  } , [])

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Coins coins={coins}/>}/>
      <Route path='/coin' element={<CoinPage />}>
        <Route path=':coinId' element={<CoinPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
