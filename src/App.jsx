import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import CoursePage from './pages/CoursePage';
import ToolsPage from './pages/ToolsPage';
import BingoPage from './pages/BingoPage';
import Module1Page from './pages/Module1Page';
import Module2Page from './pages/Module2Page';
import Module3Page from './pages/Module3Page';
import Module4Page from './pages/Module4Page';
import Module5Page from './pages/Module5Page';
import Module6Page from './pages/Module6Page';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/bingo" element={<BingoPage />} />
        <Route path="/module/1" element={<Module1Page />} />
        <Route path="/module/2" element={<Module2Page />} />
        <Route path="/module/3" element={<Module3Page />} />
        <Route path="/module/4" element={<Module4Page />} />
        <Route path="/module/5" element={<Module5Page />} />
        <Route path="/module/6" element={<Module6Page />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
