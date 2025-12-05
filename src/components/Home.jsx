import React from 'react';

// Komponen Home menerima prop setActivePage untuk navigasi tombol
const Home = ({ setActivePage }) => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100 pt-5">
      <div className="container">
        
        {/* --- FOTO PROFIL (ANIMASI MELAYANG) --- */}
        <div className="mb-4 d-flex justify-content-center animate-float">
           <div className="rounded-circle bg-dark border border-secondary position-relative d-flex align-items-center justify-content-center overflow-hidden" 
                style={{width: '160px', height: '160px', boxShadow: '0 0 50px rgba(121, 80, 242, 0.4)'}}>
              {/* Ganti src dengan foto profilmu */}
              <img 
                src="https://via.placeholder.com/160" 
                alt="Profile" 
                className="w-100 h-100 object-fit-cover" 
              />
           </div>
        </div>

        {/* --- JUDUL BESAR --- */}
        <h1 className="display-3 fw-bold mb-4 text-white">
          Hi, I'm <br />
          <span className="text-gradient">ADINDA DWI RAMADHANI</span>
        </h1>
        
        {/* --- DESKRIPSI --- */}
        <p className="text-white-50 mb-5 mx-auto fs-4" style={{ maxWidth: '700px' }}>
          Saya seorang <span className="text-white fw-bold">Junior Developer</span>
        </p>
        
        {/* --- TOMBOL MAGIC --- */}
        <div className="d-flex justify-content-center gap-3 mb-5">
           {/* Tombol Lihat Project (Pindah ke halaman Projects) */}
           <button className="btn-magic" onClick={() => setActivePage('projects')}>
              <span className="btn-magic-inner">Lihat Project Saya</span>
           </button>
           
           {/* Tombol Hubungi Saya (Pindah ke halaman Contact) */}
           <button className="btn btn-outline-light rounded-pill px-4 py-2" onClick={() => setActivePage('contact')}>
              Hubungi Saya
           </button>
        </div>

        {/* --- TECH STACK CARD --- */}
        <div className="mt-5 mx-auto animate-float-delay" style={{maxWidth: '800px'}}>
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
};

export default Home;