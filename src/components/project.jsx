import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" style={{ 
      backgroundColor: '#000000', // Hitam pekat sesuai tema
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden' 
    }}>
      
      {/* Background Glow (Opsional - Biar tidak terlalu sepi) */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '0',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 198, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0
      }}></div>

      <Container style={{ position: 'relative', zIndex: 1 }}>
        
        {/* JUDUL SECTION */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5" style={{
            background: 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '1px'
          }}>
            Featured Project
          </h2>
          <p className="text-white-50">Salah satu hasil analisis data terbaik saya</p>
        </div>

        {/* --- KARTU PROYEK (MULAI DARI SINI JIKA MAU COPY UNTUK PROJECT KE-2) --- */}
        <Card className="border-0 shadow-lg overflow-hidden" style={{ 
            background: 'rgba(255, 255, 255, 0.05)', // Efek Kaca (Glassmorphism)
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Row className="g-0 align-items-center">
            
            {/* Bagian Kiri: Visual / Gambar / Icon */}
            <Col md={5} className="bg-dark d-flex align-items-center justify-content-center p-5" style={{ minHeight: '300px', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
              {/* Jika nanti ada screenshot website/dashboard, ganti Icon ini dengan <img src="..." /> */}
              <div className="text-center">
                <FaCode size={80} color="#00C6FF" className="mb-3" />
                <h5 className="text-white-50">Data Visualization</h5>
              </div>
            </Col>

            {/* Bagian Kanan: Deskripsi */}
            <Col md={7}>
              <Card.Body className="p-4 p-lg-5">
                
                {/* Judul Project */}
                <h3 className="fw-bold text-white mb-2">Analisis Penjualan E-Commerce</h3>
                <p className="text-info mb-4" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>EXPLORATORY DATA ANALYSIS (EDA)</p>
                
                {/* Deskripsi */}
                <p className="text-white-50 mb-4" style={{ lineHeight: '1.7' }}>
                  Mengolah data transaksi lebih dari <strong>10.000 baris</strong> untuk mengidentifikasi tren produk terlaris. 
                  Proyek ini membantu memahami pola pembelian pelanggan dan musim penjualan puncak (peak season) untuk strategi marketing yang lebih efektif.
                </p>

                {/* Tech Stack (Badges) */}
                <div className="mb-4">
                  {['Python', 'Pandas', 'Matplotlib', 'Seaborn'].map((tool, index) => (
                    <Badge key={index} bg="transparent" className="me-2 mb-2 px-3 py-2" style={{ 
                      border: '1px solid #00C6FF', 
                      color: '#00C6FF',
                      fontSize: '0.85rem'
                    }}>
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Tombol Action */}
                <div className="d-flex gap-3">
                  <Button 
                    href="https://github.com/Ropita21" 
                    target="_blank"
                    className="fw-bold px-4 py-2 rounded-pill"
                    style={{
                      background: 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)',
                      border: 'none'
                    }}
                  >
                    <FaGithub className="me-2" /> Source Code
                  </Button>

                  <Button 
                    href="#" 
                    variant="outline-light"
                    className="fw-bold px-4 py-2 rounded-pill"
                    style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                  >
                    <FaExternalLinkAlt className="me-2" /> Live Demo
                  </Button>
                </div>

              </Card.Body>
            </Col>
          </Row>
        </Card>
        {/* --- AKHIR KARTU PROYEK --- */}

      </Container>
    </section>
  );
};

export default Projects;