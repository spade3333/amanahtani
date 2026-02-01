import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0b1f3a",
        color: "#ffffff",
        paddingTop: "3.5rem",
        paddingBottom: "2rem",
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
                color: "#cbd5e1",
                lineHeight: "1.6",
              }}
            >
              Kami menyediakan produk pilihan dengan kualitas terjamin,
              pelayanan cepat, dan sistem pemesanan yang mudah melalui WhatsApp
              maupun marketplace terpercaya.
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
              Fast response • Admin aktif • Aman
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
                src="https://www.google.com/maps?q=Jakarta&output=embed"
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
          © 2026 Landing Page • All rights reserved
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
