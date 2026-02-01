import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#f8fafc",
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <div
              className="text-center"
              style={{
                backgroundColor: "#ffffff",
                padding: "2.8rem 2rem",
                borderRadius: "20px",
                boxShadow: "0 14px 36px rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* JUDUL */}
              <h2
                style={{
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                  color: "#0b1f3a",
                }}
              >
                Tentang Kami
              </h2>

              {/* SUBTITLE KECIL */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#64748b",
                  marginBottom: "1.6rem",
                }}
              >
                Mengenal lebih dekat brand dan komitmen kami
              </p>

              {/* PARAGRAF UTAMA */}
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.75",
                  color: "#4a5568",
                  marginBottom: "1.6rem",
                }}
              >
                Kami adalah brand yang berfokus menghadirkan produk berkualitas
                dengan harga yang transparan dan kompetitif. Setiap produk
                dipilih secara cermat untuk memastikan kenyamanan, keandalan,
                serta kepuasan pelanggan dalam setiap pembelian.
              </p>

              {/* DIVIDER HALUS */}
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  backgroundColor: "#e2e8f0",
                  margin: "0 auto 1.6rem auto",
                  borderRadius: "2px",
                }}
              />

              {/* PARAGRAF PENUTUP */}
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.7",
                  color: "#64748b",
                  marginBottom: 0,
                }}
              >
                Dengan layanan yang responsif dan akses digital yang mudah, kami
                berupaya menjadi mitra terpercaya—mulai dari proses pemesanan
                hingga produk diterima dengan aman dan nyaman.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
