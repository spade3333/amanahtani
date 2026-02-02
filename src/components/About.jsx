import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#0b0b0b", // background gelap premium
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
        color: "#ffffff", // default teks putih
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <div
              className="text-center"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)", // transparan agar tetap gelap tapi ada frame
                padding: "2.8rem 2rem",
                borderRadius: "20px",
                boxShadow: "0 14px 36px rgba(0, 0, 0, 0.3)", // shadow lebih kontras di gelap
              }}
            >
              {/* JUDUL */}
              <h2
                style={{
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                  color: "#ffffff",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Tentang Parfum Kami
              </h2>

              {/* SUBTITLE KECIL */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#d1d5db",
                  marginBottom: "1.6rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Menemukan aroma mewah yang eksklusif untuk Anda
              </p>

              {/* PARAGRAF UTAMA */}
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.75",
                  color: "#e5e7eb",
                  marginBottom: "1.6rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Kami menghadirkan parfum premium dengan aroma yang memikat dan
                tahan lama. Setiap varian dipilih dengan cermat dari bahan
                berkualitas tinggi, menciptakan pengalaman mewah yang eksklusif
                untuk Anda. Kepuasan dan keistimewaan pelanggan menjadi fokus
                utama kami dalam setiap botol parfum.
              </p>

              {/* DIVIDER HALUS */}
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  backgroundColor: "#6b7280",
                  margin: "0 auto 1.6rem auto",
                  borderRadius: "2px",
                }}
              />

              {/* PARAGRAF PENUTUP */}
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.7",
                  color: "#d1d5db",
                  marginBottom: 0,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Dengan pelayanan yang profesional dan pengiriman aman, kami
                memastikan setiap pelanggan merasakan pengalaman parfum
                eksklusif—mulai dari pemesanan hingga aroma mewah menemani
                setiap momen spesial Anda.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
