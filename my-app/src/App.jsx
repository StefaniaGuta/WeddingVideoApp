import './App.css';
import { Suspense, lazy } from 'react';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Loader = lazy(() => import('./pages/LoaderPage/Loader'));
const GuestsPage = lazy(() => import('./pages/GuestsPage/GuestsPage'));
const MaidsPage = lazy(() => import('./pages/MaidsPage/MaidsPage'));

const App = () => {

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/guests" element={ <GuestsPage/>} />
        <Route path="/maids" element={ <MaidsPage/>} />
      </Routes>
    </Suspense>
  )
}
export default App
