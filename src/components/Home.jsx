import React from 'react';

const Home = ({ setActivePage }) => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100 pt-5">
      <div className="container">
        
        {/* --- FOTO PROFIL (ANIMASI MELAYANG) --- */}
        <div className="mb-4 d-flex justify-content-center animate-float">
           <div className="rounded-circle bg-dark border border-secondary position-relative d-flex align-items-center justify-content-center overflow-hidden" 
                style={{width: '160px', height: '160px', boxShadow: '0 0 50px rgba(0, 198, 255, 0.4)'}}>
              {/* Pastikan file gambar ada di public atau import dari assets */}
              <img 
                src="https://via.placeholder.com/160" 
                alt="Ropita Profile" 
                className="w-100 h-100 object-fit-cover" 
              />
           </div>
        </div>

        {/* --- IDENTITAS ROPITA (DATA ANALYST) --- */}
        <h1 className="display-4 fw-bold mb-3 text-white">
          Hi, I'm <br />
          <span className="text-gradient">ROPITA YOHANA SITUMORANG</span>
        </h1>
        
        <h3 className="text-white mb-4 fw-normal" style={{letterSpacing: '2px'}}>DATA ANALYST</h3>

        <p className="text-white-50 mb-5 mx-auto fs-5" style={{ maxWidth: '750px', lineHeight: '1.6' }}>
          <span className="text-white d-block mb-2 fst-italic">"Empowering Businesses with Insights"</span>
          Fokus pada pengolahan data besar, visualisasi interaktif, dan pemodelan statistik untuk pengambilan keputusan yang lebih cerdas.
        </p>
        
        {/* --- TOMBOL MAGIC --- */}
        <div className="d-flex justify-content-center gap-3">
           <button className="btn-magic" onClick={() => setActivePage('projects')}>
              <span className="btn-magic-inner">Lihat Analisis Saya</span>
           </button>
           
           <button className="btn btn-outline-light rounded-pill px-4 py-2" onClick={() => setActivePage('contact')}>
              Hubungi Saya
           </button>
        </div>

        {/* --- TECH STACK (DATA TOOLS) --- */}
        <div className="mt-5 mx-auto" style={{maxWidth: '800px'}}>
          <div className="card-glass p-4">
            <h5 className="text-white-50 mb-4 small text-uppercase" style={{letterSpacing: '2px'}}>Analytical Tools</h5>
            <div className="d-flex flex-wrap justify-content-center gap-3">
               {['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Pandas', 'R', 'NumPy'].map((tech) => (
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