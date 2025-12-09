import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaCertificate, FaEye, FaAward } from 'react-icons/fa';

import magangImg from '../asset/Magang.jpeg';
import msib from '../asset/MSIB BATCH 7.jpeg';
import panitiaUKM from '../asset/UKM Bendahara.jpeg';
import panitiaUKM2 from '../asset/wakil ketua psdm.jpeg';
import panitia from '../asset/Panitia Interview.jpeg';


const certificateData = [
  { 
    id: 1, 
    title: ' Maganga Web Developer', 
    issuer: 'PT.Total Karya Berkah', 
    date: '2025',
    image:magangImg,
  },
  { 
    id: 2, 
    title: 'MSIB BATCH 7', 
    issuer: 'Startup Campus', 
    date: '2024',
    image:msib,
  },
  { 
    id: 3, 
    title: 'Bendahara UKM (Big Famaly Of Imformatics Student Mikroskil)', 
    issuer: 'BITSMIKRO', 
    date: '2023',
    image:panitiaUKM,
  },
  { 
    id: 4, 
    title: 'wakil ketua PSDM UKM', 
    issuer: 'BITSMIKRO', 
    date: '2025',
    image:panitiaUKM2,
  },
  { 
    id: 5, 
    title: 'Panitia Interview', 
    issuer: 'BITSMIKRO', 
    date: '2024',
    image:panitia,
  },
  
];

const Certificates = () => {
  // State untuk mengatur Popup (Modal)
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // Fungsi saat tombol ditekan
  const handleShow = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section id="certificates" style={{ backgroundColor: '#000000', padding: '100px 0' }}>
      <Container>
        
        {/* JUDUL SECTION */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5" style={{
            background: 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '1px'
          }}>
            <FaCertificate className="me-3 mb-1" style={{ color: '#00C6FF' }} />
            Licences & Certifications
          </h2>
          <p className="text-white-50">Bukti kompetensi dan pengembangan profesional saya</p>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {certificateData.map((cert) => (
            <Col key={cert.id}>
              {/* CARD UTAMA */}
              <Card className="h-100 border-0 shadow-lg" style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', // Glass Effect
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease'
              }}
              // Efek hover sederhana lewat onMouseEnter/Leave bisa ditambahkan di CSS, 
              // tapi di sini kita pakai style statis biar rapi.
              >
                {/* Gambar Thumbnail */}
                <div style={{ height: '200px', overflow: 'hidden', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }} 
                  />
                </div>

                <Card.Body className="d-flex flex-column text-white">
                  <div className="mb-2">
                    <span className="badge bg-dark border border-secondary text-info me-2">{cert.issuer}</span>
                    <span className="badge bg-dark border border-secondary text-white-50">{cert.date}</span>
                  </div>
                  
                  <Card.Title className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>{cert.title}</Card.Title>
                  
                  {/* Tombol Action (Membuka Modal) */}
                  <Button 
                    variant="outline-primary" 
                    className="mt-auto w-100 fw-bold rounded-pill"
                    onClick={() => handleShow(cert)}
                    style={{ 
                        borderColor: '#00C6FF', 
                        color: '#00C6FF',
                        transition: '0.3s'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#00C6FF';
                        e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#00C6FF';
                    }}
                  >
                    <FaEye className="me-2" /> Lihat Sertifikat
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* --- MODAL (POPUP) UNTUK MELIHAT GAMBAR FULL --- */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #333' }}>
            <Modal.Title className="text-white ms-2">
                <FaAward className="text-warning me-2" />
                {selectedCert?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#000', padding: '0' }}>
            {selectedCert && (
                <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="w-100 h-auto"
                />
            )}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #333' }}>
            <div className="text-white-50 w-100 d-flex justify-content-between">
                <small>Issuer: {selectedCert?.issuer}</small>
                <Button variant="secondary" size="sm" onClick={handleClose}>Close</Button>
            </div>
          </Modal.Footer>
        </Modal>

      </Container>
    </section>
  );
};

export default Certificates;