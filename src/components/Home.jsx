import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Import Icon Download

const Home = ({ setActivePage }) => {
  
  // --- PENGATURAN FOTO PROFIL ---
  // Pastikan file gambar ada di folder public
  const profileImg = "/poto.png"; 

  return (
    <section 
      id="home"
      className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100"
      style={{ paddingTop: '120px' }} 
    >
      {/* --- STYLE KHUSUS ANIMASI TOMBOL --- */}
      <style>
        {`
          @keyframes pulse-glow {
            0% { box-shadow: 0 0 0 0 rgba(0, 198, 255, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(0, 198, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(0, 198, 255, 0); }
          }
          .btn-cv-animated {
            background: linear-gradient(90deg, #00C6FF 0%, #0072FF 100%);
            border: none;
            color: white !important;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            animation: pulse-glow 2s infinite; /* Animasi Denyut */
          }
          .btn-cv-animated:hover {
            transform: translateY(-5px); /* Efek naik saat di-hover */
            box-shadow: 0 10px 25px rgba(0, 198, 255, 0.5);
          }
          /* Animasi Icon panah turun naik saat hover */
          .btn-cv-animated:hover .icon-bounce {
            animation: bounce 0.5s infinite alternate;
          }
          @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(3px); }
          }
        `}
      </style>

      <div className="container">
        
        {/* --- FOTO PROFIL --- */}
        <div className="mb-4 d-flex justify-content-center">
           <div className="rounded-circle bg-dark border border-secondary position-relative d-flex align-items-center justify-content-center overflow-hidden" 
                style={{width: '200px', height: '200px', boxShadow: '0 0 50px rgba(0, 198, 255, 0.4)'}}>
              
              <img 
                src={profileImg} 
                alt="Ropita Profile" 
                className="w-100 h-100 object-fit-cover" 
              />
           </div>
        </div>

        {/* --- IDENTITAS --- */}
        <h1 className="display-4 fw-bold mb-3 text-white">
          Hi, I'm <br />
          <span className="text-gradient" style={{
            background: 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ROPITA SITUMORANG
          </span>
        </h1>
        
        <h3 className="text-white mb-4 fw-normal" style={{letterSpacing: '2px'}}>DATA ANALYST</h3>

        <p className="text-white-50 mb-5 mx-auto fs-5" style={{ maxWidth: '750px', lineHeight: '1.6' }}>
          <span className="text-white d-block mb-2 fst-italic">"Empowering Businesses with Insights"</span>
          Mahasiswa Aktif S1 Teknik Informatika Pengalaman Magang sebagai Web Development yang berfokus pembuatan aplikasi bisnis E-Commerce dan MSIB Batch 7
          Data Science Track yang fokus pada pengolahan data besar, visualisasi, dan pemodelan statistik untuk pengambilan keputusan yang lebih baik pada bisnis.
        </p>
        
        {/* --- TOMBOL DOWNLOAD CV (UPDATED) --- */}
        <div className="d-flex justify-content-center gap-3">
           <a 
             href="/resume.pdf" 
             download 
             className="btn btn-lg px-5 py-3 fw-bold rounded-pill btn-cv-animated d-flex align-items-center gap-2"
           >
               {/* Icon Download */}
               <FaDownload className="icon-bounce" /> 
               DOWNLOAD CV
           </a>
        </div>

        {/* --- TECH STACK --- */}
        <div className="mt-5 mx-auto" style={{maxWidth: '800px'}}>
          <div className="p-4" style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              backdropFilter: 'blur(10px)', 
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <h5 className="text-white-50 mb-4 small text-uppercase" style={{letterSpacing: '2px'}}>Tools Keahlian</h5>
            <div className="d-flex flex-wrap justify-content-center gap-3">
               {['Python', 'SQL', 'Looker Studio', 'BigQuery', 'Excel', 'Machine Learning'].map((tech) => (
                  <span key={tech} className="badge bg-dark border border-secondary px-3 py-2" style={{ fontSize: '0.9rem' }}>
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