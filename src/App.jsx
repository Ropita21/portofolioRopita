import React, { useState, useEffect } from 'react';

// --- 1. IMPORT KOMPONEN DARI FILE TERPISAH ---
// Pastikan nama file dan foldernya SESUAI dengan yang ada di laptopmu!
import Home from './components/Home';
import MyNavbar from './components/Navbar'; // Pastikan nama filenya Navbar.jsx (huruf besar N)

// Sesuaikan path ini dengan struktur foldermu (berdasarkan screenshot sebelumnya):
import Certificates from './components/sertifikat'; // atau './pages/Certificates'
import Projects from './components/project';        // atau './pages/Projects'
import Contact from './components/contact';         // atau './pages/Contact'


// --- 2. GLOBAL STYLES & ANIMASI (Cyberpunk Theme) ---
// Kita taruh CSS di sini agar tema Neon-nya tetap jalan di semua halaman
const GlobalStyles = () => (
  <style>
    {`
      /* Reset & Basic Dark Theme */
      body { margin: 0; font-family: 'Inter', sans-serif; background-color: #050505; color: #ffffff; overflow-x: hidden; }
      
      /* --- ANIMASI LOADING --- */
      .loader-container { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #050505; display: flex; justify-content: center; align-items: center; z-index: 9999; flex-direction: column; }
      .loader-text { font-family: 'Courier New', monospace; font-size: 1rem; color: #00c6ff; margin-bottom: 15px; letter-spacing: 4px; text-transform: uppercase; animation: text-flicker 1.5s infinite alternate; }
      .loader-bar-bg { width: 250px; height: 6px; background: #1a1a1a; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.5); }
      .loader-bar-fill { height: 100%; background: linear-gradient(90deg, #0072ff, #00c6ff); width: 0%; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 198, 255, 0.8); animation: progress-fill 2.5s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
      @keyframes text-flicker { 0% { opacity: 0.5; } 100% { opacity: 1; text-shadow: 0 0 10px #00c6ff; } }
      @keyframes progress-fill { 0% { width: 0%; } 20% { width: 10%; } 50% { width: 60%; } 100% { width: 100%; } }

      /* --- ANIMASI UI UTAMA --- */
      @keyframes spin-border { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
      @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
      @keyframes glow-pulse { 
        0% { box-shadow: 0 0 15px rgba(0, 114, 255, 0.1); border-color: rgba(0, 114, 255, 0.2); } 
        50% { box-shadow: 0 0 30px rgba(0, 198, 255, 0.3); border-color: rgba(0, 198, 255, 0.5); } 
        100% { box-shadow: 0 0 15px rgba(0, 114, 255, 0.1); border-color: rgba(0, 114, 255, 0.2); } 
      }

      /* Utilities (Cyan Theme) */
      .text-gradient { background: linear-gradient(90deg, #0072ff 0%, #00c6ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; }
      .animate-float { animation: float 4s ease-in-out infinite; }
      .navbar-glass { background-color: rgba(5, 5, 5, 0.8) !important; backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05); }

      /* Components Styles (Button & Cards) */
      .btn-magic { position: relative; display: inline-block; padding: 2px; border-radius: 50px; background: transparent; text-decoration: none; box-shadow: 0 0 20px rgba(0, 114, 255, 0.3); transition: transform 0.3s; overflow: hidden; cursor: pointer; border: none; }
      .btn-magic::before { content: ''; position: absolute; top: 50%; left: 50%; width: 300%; height: 300%; background: conic-gradient(from 0deg, #0072ff, #00c6ff, #0072ff); transform: translate(-50%, -50%); animation: spin-border 2s linear infinite; z-index: 0; }
      .btn-magic:hover { transform: translateY(-3px); box-shadow: 0 0 40px rgba(0, 198, 255, 0.6); }
      .btn-magic-inner { position: relative; display: flex; align-items: center; justify-content: center; background: #0f1014; color: white; border-radius: 48px; padding: 10px 30px; z-index: 1; font-weight: 600; width: 100%; height: 100%; }
      
      .card-glass { background: rgba(10, 25, 41, 0.6); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; animation: glow-pulse 3s infinite; }
      .badge-tech { background: #0f1014; border: 1px solid #333; color: #ccc; padding: 8px 16px; border-radius: 20px; transition: 0.3s; }
      .badge-tech:hover { border-color: #00c6ff; color: white; transform: scale(1.05); }
    `}
  </style>
);

// --- 3. KOMPONEN UTAMA (APP) ---
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inject CSS Library (Bootstrap)
    const linkCSS = document.createElement("link");
    linkCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    linkCSS.rel = "stylesheet";
    document.head.appendChild(linkCSS);
    
    // Timer Loading (Animasi Progress Bar)
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Tampilan saat Loading
  if (isLoading) {
    return (
      <>
        <GlobalStyles />
        <div className="loader-container">
          <div className="loader-text">INITIALIZING DATASETS...</div>
          <div className="loader-bar-bg"><div className="loader-bar-fill"></div></div>
        </div>
      </>
    );
  }

  // Logic Pindah Halaman
  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'certificates': return <Certificates />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="App">
      <GlobalStyles /> {/* Memuat Style Cyberpunk */}
      
      <MyNavbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {renderPage()}
      </main>
      
      <footer className="text-center py-4 text-white-50 small mt-auto" style={{borderTop: '1px solid rgba(255,255,255,0.05)'}}>
        <p className="mb-0">Dibuat dengan React & Bootstrap | Ropita Yohana Situmorang &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;