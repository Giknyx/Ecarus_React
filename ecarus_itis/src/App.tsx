import React from 'react';
import './App.sass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { HistoryCard } from './components/history_card/HistoryCard';
import { PromocodeCard } from './components/promocode_card/PromocodeCard';
import { Auth } from './pages/auth/Auth';
import { Home } from './pages/home/Home';
import { Footer } from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Auth />}>
            <Route path="/profile/promocodes" element={<PromocodeCard />} />
            <Route path="/profile/histories" element={<HistoryCard />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
