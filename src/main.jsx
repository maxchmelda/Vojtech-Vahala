import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import App from './App.jsx'
import GalleryPage from './GalleryPage.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      {/* všechny routes používají Layout */}
      <Route element={<Layout />}>

        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<GalleryPage />} />

      </Route>

    </Routes>
  </BrowserRouter>
)
