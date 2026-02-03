import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1b5e20",
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
                color: "#e8f5e9",
                lineHeight: "1.6",
              }}
            >
              Amanah Tani menyediakan obat pertanian berkualitas dan bibit pack
              unggulan untuk membantu petani mendapatkan hasil panen yang sehat,
              kuat, dan maksimal.
            </p>
          </Col>

          {/* HUBUNGI KAMI */}
          <Col md={4} className="text-center">
            <h5 style={{ fontWeight: 600, marginBottom: "0.75rem" }}>
              Hubungi Kami
            </h5>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#e8f5e9",
                marginBottom: "0.3rem",
              }}
            >
              🕒 Jam Operasional
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#c8e6c9",
                marginBottom: "1rem",
              }}
            >
              Setiap Hari • 06.00 – 18.00
            </p>

            {/* Media Sosial */}
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.tiktok.com/@ardiyanto30"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  transition: "transform 0.2s",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-tiktok"></i>
              </a>
              <a
                href="https://www.instagram.com/amanah.tani_id1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  transition: "transform 0.2s",
                }}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://wa.me/6288983943409"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  transition: "transform 0.2s",
                }}
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </Col>

          {/* LOKASI */}
          <Col md={4} className="text-center text-md-end">
            <h5 style={{ fontWeight: 600, marginBottom: "0.75rem" }}>
              Lokasi Kami
            </h5>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#e8f5e9",
                marginBottom: "0.5rem",
              }}
            >
              MWH7+R39, Kebumen Lor, Bumirejo, Kec. Mojotengah, Kabupaten
              Wonosobo, Jawa Tengah 56351, Indonesia
            </p>

            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              }}
            >
              <iframe
                title="Google Maps Amanah Tani"
                src="https://www.google.com/maps?q=Toko%20pertanian%20Amanah%20Tani,-7.3204545974731445,109.9127197265625&hl=en&z=17&output=embed"
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
          className="text-center mt-4"
          style={{
            fontSize: "0.75rem",
            color: "#c8e6c9",
          }}
        >
          © 2026 Amanah Tani • Solusi Obat & Bibit Pertanian
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
