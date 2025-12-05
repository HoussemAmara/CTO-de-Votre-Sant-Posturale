import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QcmPage from "./pages/QcmPage";
import Recommendations from "./pages/recommendations";
import "./index.css";
import App from './App';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/qcm" element={<QcmPage />} />
        <Route path="/" element={<App />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
