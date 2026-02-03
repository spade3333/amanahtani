import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#f0fdf4", // hijau sangat muda
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
        color: "#14532d", // hijau tua
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
                boxShadow: "0 14px 36px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* JUDUL */}
              <h2
                style={{
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                  color: "#166534", // hijau utama
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Tentang Produk Pertanian Kami
              </h2>

              {/* SUBTITLE */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#16a34a",
                  marginBottom: "1.6rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Solusi tepat untuk pertanian yang sehat dan produktif
              </p>

              {/* PARAGRAF UTAMA */}
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.75",
                  color: "#374151",
                  marginBottom: "1.6rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Kami menyediakan berbagai <strong>obat pertanian</strong> dan
                <strong> bibit unggulan</strong> untuk membantu petani menjaga
                kesehatan tanaman serta meningkatkan hasil panen. Produk kami
                cocok digunakan untuk sawah, kebun, dan lahan pertanian lainnya.
              </p>

              {/* DIVIDER */}
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  backgroundColor: "#22c55e",
                  margin: "0 auto 1.6rem auto",
                  borderRadius: "2px",
                }}
              />

              {/* PARAGRAF PENUTUP */}
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.7",
                  color: "#4b5563",
                  marginBottom: 0,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Dengan harga yang terjangkau, stok produk yang selalu tersedia,
                serta pelayanan ramah dan cepat, kami siap menjadi mitra
                terpercaya bagi petani dalam setiap musim tanam.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
