import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0b0b0b",
        color: "#ffffff",
        paddingTop: "3.5rem",
        paddingBottom: "2rem",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* DESKRIPSI */}
          <Col md={4} className="text-center text-md-start">
            <h5 style={{ fontWeight: 600, marginBottom: "0.75rem" }}>
              Tentang Kami
            </h5>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#d1d5db",
                lineHeight: "1.6",
              }}
            >
              Kami menghadirkan parfum eksklusif dengan aroma premium, kemasan
              elegan, dan layanan cepat melalui WhatsApp maupun marketplace
              terpercaya.
            </p>
          </Col>

          {/* KONTAK */}
          <Col md={4} className="text-center">
            <h5 style={{ fontWeight: 600, marginBottom: "0.75rem" }}>
              Hubungi Kami
            </h5>

            <div className="d-flex justify-content-center gap-3 fs-4 mb-2">
              <a
                href="https://wa.me/628xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#25D366" }}
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#e1306c" }}
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a href="mailto:email@domain.com" style={{ color: "#e5e7eb" }}>
                <i className="bi bi-envelope"></i>
              </a>
            </div>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#cbd5e1",
              }}
            >
              Respon cepat • Admin aktif • Aman & terpercaya
            </p>
          </Col>

          {/* GOOGLE MAPS */}
          <Col md={4} className="text-center text-md-end">
            <h5 style={{ fontWeight: 600, marginBottom: "0.75rem" }}>
              Lokasi Kami
            </h5>

            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
              }}
            >
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.879556845808!2d109.90973117500122!3d-7.326093603101307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa10055d056df%3A0xf8bc3be8d729c22!2sMystery%20Perfume!5e0!3m2!1sen!2sid!4v1709145320188!5m2!1sen!2sid"
                width="100%"
                height="160"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* COPYRIGHT */}
        <div
          className="text-center"
          style={{
            marginTop: "2.5rem",
            fontSize: "0.75rem",
            color: "#94a3b8",
          }}
        >
          © 2026 Landing Page Parfum • All rights reserved
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
