/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import VerifyPage from './pages/VerifyPage';
import GuidelinesPage from './pages/GuidelinesPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="w-full border-b border-black/20 py-4 px-10 flex justify-center gap-12 font-serif text-[10px] uppercase tracking-[0.2em] font-bold">
          <Link to="/" className="hover:opacity-50 transition-opacity">Home</Link>
          <Link to="/verify" className="hover:opacity-50 transition-opacity">Verify Title</Link>
          <Link to="/guidelines" className="hover:opacity-50 transition-opacity">Guidelines</Link>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

