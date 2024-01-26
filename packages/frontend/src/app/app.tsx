import React from 'react'

import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

// import { HomePage } from './pages/home-page'
// import { AboutPage } from './pages/about-page'

const HomePage = React.lazy(() => import('./pages/home-page'))
const AboutPage = React.lazy(() => import('./pages/about-page'))

export function App() {
  return (
    <React.Suspense fallback={<Spin />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page-2" element={<AboutPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
