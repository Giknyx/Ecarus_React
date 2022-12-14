import React from 'react';
import './App.sass';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { HistoryCard } from './components/history_card/HistoryCard';
import { PromocodeCard } from './components/promocode_card/PromocodeCard';
import { Auth } from './pages/auth/Auth';
import { Home } from './pages/home/Home';
import { Footer } from './components/footer/Footer';
import Market from './pages/market/Market';
import { CollectionPoints } from './pages/collection_points/CollectionPoints';

const App = () => {
  return (
    <div className="page-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/map" element={<CollectionPoints />} />
        <Route path="/about" element={<div />} />
        <Route path="/profile" element={<Auth />}>
          <Route path="/profile/promocodes" element={<PromocodeCard />} />
          <Route path="/profile/histories" element={<HistoryCard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
