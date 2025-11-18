import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import CoursePage from './pages/CoursePage';
import ToolsPage from './pages/ToolsPage';
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
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
