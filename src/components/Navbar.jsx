import React from 'react';

const MyNavbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3 navbar-glass">
      <div className="container">
        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold fs-4" href="#" onClick={() => setActivePage('home')}>
          <i className="bi bi-bar-chart-line-fill text-warning me-2"></i>
          <span className="text-gradient">Portofolio</span>Ropita
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            
            {/* LINK 1: HOME */}
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none text-uppercase ${activePage === 'home' ? 'text-white fw-bold' : 'text-white-50'}`}
                onClick={() => setActivePage('home')}
              >
                HOME
              </button>
            </li>

            {/* LINK 2: CERTIFICATES */}
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none text-uppercase ${activePage === 'certificates' ? 'text-white fw-bold' : 'text-white-50'}`}
                onClick={() => setActivePage('certificates')}
              >
                CERTIFICATES
              </button>
            </li>

            {/* LINK 3: PROJECTS */}
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link text-decoration-none text-uppercase ${activePage === 'projects' ? 'text-white fw-bold' : 'text-white-50'}`}
                onClick={() => setActivePage('projects')}
              >
                PROJECTS
              </button>
            </li>

            {/* LINK 4: CONTACT (Button Style) */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button 
                className="btn btn-warning fw-bold px-4 rounded-pill"
                style={{ backgroundColor: '#ff9000', border: 'none', color: 'white' }}
                onClick={() => setActivePage('contact')}
              >
                CONTACT
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;