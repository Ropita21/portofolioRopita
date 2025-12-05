import React, { useState, useEffect } from 'react';

// --- BAGIAN 1: GLOBAL STYLES & ANIMASI ---
const GlobalStyles = () => (
  <style>
    {`
      /* Reset & Basic Dark Theme */
      body { margin: 0; font-family: 'Inter', sans-serif; background-color: #050505; color: #ffffff; overflow-x: hidden; }
      
      /* --- ANIMASI BARU: LOADING PROGRESS BAR (Cyberpunk Style) --- */
      .loader-container { 
        position: fixed; top: 0; left: 0; width: 100%; height: 100vh; 
        background: #050505; display: flex; justify-content: center; align-items: center; 
        z-index: 9999; flex-direction: column; 
      }

      .loader-text {
        font-family: 'Courier New', monospace; /* Font ala coding */
        font-size: 1rem;
        color: #f783ac; /* Pink Neon */
        margin-bottom: 15px;
        letter-spacing: 4px;
        text-transform: uppercase;
        animation: text-flicker 1.5s infinite alternate;
      }

      .loader-bar-bg {
        width: 250px;
        height: 6px;
        background: #1a1a1a; /* Abu gelap */
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }

      .loader-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #7950f2, #f783ac); /* Gradasi Ungu ke Pink */
        width: 0%;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(121, 80, 242, 0.8); /* Glow effect */
        animation: progress-fill 2.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      }

      @keyframes text-flicker {
        0% { opacity: 0.5; }
        100% { opacity: 1; text-shadow: 0 0 10px #f783ac; }
      }

      @keyframes progress-fill {
        0% { width: 0%; }
        20% { width: 10%; } /* Jeda sebentar */
        50% { width: 60%; } /* Ngebut */
        100% { width: 100%; }
      }

      /* --- ANIMASI UI UTAMA --- */
      @keyframes spin-border { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
      @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
      @keyframes glow-pulse { 0% { box-shadow: 0 0 15px rgba(121, 80, 242, 0.1); border-color: rgba(121, 80, 242, 0.2); } 50% { box-shadow: 0 0 30px rgba(247, 131, 172, 0.3); border-color: rgba(247, 131, 172, 0.5); } 100% { box-shadow: 0 0 15px rgba(121, 80, 242, 0.1); border-color: rgba(121, 80, 242, 0.2); } }

      /* Utilities */
      .text-gradient { background: linear-gradient(90deg, #7950f2 0%, #f783ac 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; }
      .animate-float { animation: float 4s ease-in-out infinite; }
      .animate-float-delay { animation: float 5s ease-in-out infinite reverse; }
      .navbar-glass { background-color: rgba(5, 5, 5, 0.8) !important; backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05); }

      /* Components UI Styles */
      .btn-magic { position: relative; display: inline-block; padding: 2px; border-radius: 50px; background: transparent; text-decoration: none; box-shadow: 0 0 20px rgba(121, 80, 242, 0.3); transition: transform 0.3s; overflow: hidden; cursor: pointer; border: none; }
      .btn-magic::before { content: ''; position: absolute; top: 50%; left: 50%; width: 300%; height: 300%; background: conic-gradient(from 0deg, #7950f2, #f783ac, #7950f2); transform: translate(-50%, -50%); animation: spin-border 2s linear infinite; z-index: 0; }
      .btn-magic:hover { transform: translateY(-3px); box-shadow: 0 0 40px rgba(247, 131, 172, 0.6); }
      .btn-magic-inner { position: relative; display: flex; align-items: center; justify-content: center; background: #0f1014; color: white; border-radius: 48px; padding: 10px 30px; z-index: 1; font-weight: 600; width: 100%; height: 100%; }
      
      .card-glass { background: rgba(25, 25, 30, 0.6); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; animation: glow-pulse 3s infinite; }
      
      .badge-tech { background: #0f1014; border: 1px solid #333; color: #ccc; padding: 8px 16px; border-radius: 20px; transition: 0.3s; }
      .badge-tech:hover { border-color: #7950f2; color: white; transform: scale(1.05); }
    `}
  </style>
);

// --- BAGIAN 2: KOMPONEN HALAMAN ---

// 1. Home Component
const Home = ({ setActivePage }) => (
  <section className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100 pt-5">
    <div className="container">
      {/* Foto Profil */}
      <div className="mb-4 d-flex justify-content-center animate-float">
         <div className="rounded-circle bg-dark border border-secondary position-relative d-flex align-items-center justify-content-center overflow-hidden" 
              style={{width: '160px', height: '160px', boxShadow: '0 0 50px rgba(121, 80, 242, 0.4)'}}>
            <img src="https://via.placeholder.com/160" alt="Profile" className="w-100 h-100 object-fit-cover" />
         </div>
      </div>

      <h1 className="display-3 fw-bold mb-4 text-white">
        Hi, I'm <br />
        <span className="text-gradient">ADINDA DWI RAMADHANI</span>
      </h1>
      
      <p className="text-white-50 mb-5 mx-auto fs-4" style={{ maxWidth: '700px' }}>
        Saya seorang <span className="text-white fw-bold">Junior Developer</span>
      </p>
      
      {/* Tombol Magic */}
      <div className="d-flex justify-content-center gap-3">
         <button className="btn-magic" onClick={() => setActivePage('projects')}>
            <span className="btn-magic-inner">Lihat Project Saya</span>
         </button>
         <button className="btn btn-outline-light rounded-pill px-4 py-2" onClick={() => setActivePage('contact')}>
            Hubungi Saya
         </button>
      </div>

      {/* Tech Stack */}
      <div className="mt-5 mx-auto" style={{maxWidth: '800px'}}>
        <div className="card-glass p-4">
          <h5 className="text-white-50 mb-4 small text-uppercase" style={{letterSpacing: '2px'}}>Technical Arsenal</h5>
          <div className="d-flex flex-wrap justify-content-center gap-3">
             {['React', 'Node.js', 'Unity', 'Python', 'MySQL', 'Red Hat'].map((tech) => (
                <span key={tech} className="badge-tech">
                  {tech}
                </span>
             ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 2. Dummy Components (Bisa diganti import file asli jika sudah ada)
const Certificates = () => (
  <div className="container pt-5 mt-5 min-vh-100">
    <div className="text-center mb-5">
      <h1 className="display-4 fw-bold text-white">My <span className="text-gradient">Certificates</span></h1>
      <p className="text-white-50">Bukti kompetensi profesional saya.</p>
    </div>
    <div className="row g-4">
       {[1, 2, 3].map((item) => (
         <div className="col-md-4" key={item}>
            <div className="card-glass p-3 h-100">
               <div className="bg-dark rounded mb-3 d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                 <span className="text-muted">Certificate Image {item}</span>
               </div>
               <h5 className="fw-bold">Certificate Title {item}</h5>
               <p className="text-white-50 small">Issuer Name • 2024</p>
               <span className="badge bg-success">Verified</span>
            </div>
         </div>
       ))}
    </div>
  </div>
);

const Projects = () => (
  <div className="container pt-5 mt-5 min-vh-100">
    <div className="text-center mb-5">
       <h1 className="display-4 fw-bold text-white">My <span className="text-gradient">Projects</span></h1>
       <p className="text-white-50">Beberapa karya terbaik yang pernah saya buat.</p>
    </div>
    <div className="row g-4">
      {[1, 2, 3].map((item) => (
         <div className="col-md-4" key={item}>
            <div className="card-glass p-4 h-100">
               <div className="bg-dark rounded mb-3 d-flex align-items-center justify-content-center" style={{height: '180px'}}>
                  <span className="text-muted">Project Thumbnail</span>
               </div>
               <h4 className="fw-bold">Project Name {item}</h4>
               <p className="text-white-50 small">React • Node.js • MySQL</p>
               <p className="text-white-50">Deskripsi singkat project ini.</p>
               <button className="btn btn-outline-light btn-sm w-100 mt-auto">View Details</button>
            </div>
         </div>
       ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="container pt-5 mt-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <div className="text-center mb-5">
       <h1 className="display-4 fw-bold text-white">CONTACT <span className="text-gradient">ME</span></h1>
       <p className="text-white-50 fs-5">Saya terbuka untuk kolaborasi baru!</p>
    </div>
    <div className="card-glass p-5 text-center" style={{maxWidth: '600px', width: '100%'}}>
       <h3 className="fw-bold mb-3">Drop me an email</h3>
       <p className="text-white-50 mb-4">Punya pertanyaan atau tawaran kerja? Kirimkan pesan langsung.</p>
       <a href="mailto:dindaramadani054@gmail.com" className="btn-magic w-100">
          <span className="btn-magic-inner">
             <i className="bi bi-envelope-fill me-2"></i> Contact via Email
          </span>
       </a>
    </div>
  </div>
);

// 3. Navbar Component
const MyNavbar = ({ activePage, setActivePage }) => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3 navbar-glass">
    <div className="container">
      <a className="navbar-brand fw-bold fs-4" href="#" onClick={() => setActivePage('home')}>
        <span className="text-gradient">My</span>Portfolio
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          {['home', 'certificates', 'projects', 'contact'].map((item) => (
            <li className="nav-item" key={item}>
              <button 
                className={`nav-link btn btn-link text-decoration-none text-capitalize ${activePage === item ? 'text-white fw-bold' : 'text-white-50'}`}
                onClick={() => setActivePage(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button className="btn btn-outline-light rounded-pill px-4 btn-sm" onClick={() => setActivePage('contact')}>
          Hire Me
        </button>
      </div>
    </div>
  </nav>
);

// --- BAGIAN 3: MAIN APP LOGIC ---
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inject CSS Library (Bootstrap) secara manual agar preview jalan
    const linkCSS = document.createElement("link");
    linkCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    linkCSS.rel = "stylesheet";
    document.head.appendChild(linkCSS);
    
    // Timer Loading 2.5 Detik (Sesuai durasi animasi bar)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Tampilan saat Loading (Progress Bar Cyberpunk)
  if (isLoading) {
    return (
      <>
        <GlobalStyles />
        <div className="loader-container">
          <div className="loader-text">INITIALIZING SYSTEM...</div>
          <div className="loader-bar-bg">
            <div className="loader-bar-fill"></div>
          </div>
        </div>
      </>
    );
  }

  // Tampilan Utama (Setelah Loading Selesai)
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
      <GlobalStyles />
      
      <MyNavbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {renderPage()}
      </main>
      
      <footer className="text-center py-4 text-white-50 small mt-auto" style={{borderTop: '1px solid rgba(255,255,255,0.05)'}}>
        <p className="mb-0">Dibuat dengan React & Bootstrap | Adinda Dwi Ramadhani &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;