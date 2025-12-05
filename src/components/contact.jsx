import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const myEmail = "nama.anda@email.com"; // Ganti dengan email Anda
  const subject = "Tawaran Kerjasama/Peluang Kerja";
  
  // Konstruksi mailto link menggunakan JavaScript/ekspresi dalam JSX
  const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}`;
  
  return (
    <div id="contact" className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="mb-4"><FaEnvelope className="me-2 text-warning" /> Hubungi Saya</h2>
        <p className="lead mb-4">
          Tertarik untuk berkolaborasi atau memiliki peluang kerja? Kirimkan saya pesan!
        </p>
        
        {/* Tombol yang mengarah ke link mailto: */}
        <Button 
          href={mailtoLink}
          variant="warning"
          size="lg"
          className="fw-bold py-3 px-5 shadow-lg"
          style={{ backgroundColor: '#ff9000', borderColor: '#ff9000', color: 'white' }}
        >
          Kirim Email Sekarang
        </Button>
        
        <p className="mt-3 text-muted">
          atau langsung kirim ke: **{myEmail}**
        </p>
      </Container>
    </div>
  );
};

export default Contact;