import React, { useState } from 'react';
// Asumsi: Tailwind CSS sudah diimpor di index.js
// Masalah dependensi: Impor Bootstrap dikomentari sementara agar kompilasi berhasil.
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// Impor semua komponen
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Certificates from './components/sertifikat';
import Projects from './components/project';
import Contact from './components/contact';

/**
 * Komponen Utama Aplikasi (Menggunakan State-Based Routing)
 */
const App = () => {
  // State untuk melacak halaman yang sedang aktif. Default ke 'home'.
  const [activePage, setActivePage] = useState('home');

  // Fungsi untuk merender komponen halaman
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'certificates':
        return <Certificates />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    // Struktur utama menggunakan flex column untuk memastikan footer ada di bawah
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      
      {/* Navbar: Mengirimkan fungsi setActivePage ke MyNavbar */}
      <MyNavbar activePage={activePage} setActivePage={setActivePage} />
      
      {/* Konten Utama Aplikasi: Halaman Aktif Dirender di sini */}
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-[#0a1930] text-white text-center py-3 mt-auto">
        <p className="mb-0 text-sm">
          Dibuat dengan React & Tailwind | Brandon A. Harper &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;