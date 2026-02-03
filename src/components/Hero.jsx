import { Container, Row, Col, Button } from "react-bootstrap";
import heropf from "../assets/images/herotani.jpg";
import logo from "../assets/images/logo.png";

function Hero() {
  const fontStyle = { fontFamily: "'Playfair Display', serif" };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: `url(${heropf}) center/cover no-repeat`,
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#ffffff",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(27,94,32,0.72), rgba(27,94,32,0.72))",
          zIndex: 1,
        }}
      />

      <Container
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "5rem",
          paddingBottom: "5rem",
          ...fontStyle,
        }}
      >
        {/* ===== MAIN CONTENT ===== */}
        <Row className="align-items-center" style={{ minHeight: "360px" }}>
          {/* TEXT */}
          <Col
            md={6}
            className="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              align-items-md-start
              text-center
              text-md-start
            "
          >
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "1px",
                color: "#c8e6c9",
                marginBottom: "0.6rem",
              }}
            >
              TOKO PERTANIAN TERPERCAYA
            </span>

            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 2.7rem)",
                fontWeight: 700,
                lineHeight: "1.25",
                marginBottom: "1rem",
              }}
            >
              Solusi Pertanian
              <br />
              Sehat & Berkualitas
            </h1>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.75",
                color: "#e8f5e9",
                maxWidth: "460px",
              }}
            >
              Amanah Tani menyediakan obat pertanian dan bibit pack unggulan
              untuk mendukung pertumbuhan tanaman yang sehat, kuat, dan hasil
              panen yang optimal.
            </p>
          </Col>

          {/* LOGO */}
          <Col
            md={6}
            className="
    d-flex
    align-items-center
    justify-content-center
    mt-4
    mt-md-0
  "
          >
            <div
              style={{
                width: "240px",
                padding: "1.4rem 1.2rem",
                borderRadius: "24px",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 18px 40px rgba(0,0,0,0.3)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {/* LOGO */}
              <img
                src={logo}
                alt="Amanah Tani"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "0.6rem",
                }}
              />

              {/* NAMA TOKO */}
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  color: "#1b5e20",
                }}
              >
                AMANAH TANI
              </div>

              {/* TAGLINE KECIL */}
              <div
                style={{
                  fontSize: "0.7rem",
                  marginTop: "0.15rem",
                  color: "#4caf50",
                  letterSpacing: "0.5px",
                }}
              >
                Toko Pertanian
              </div>
            </div>
          </Col>
        </Row>

        {/* ===== CTA ===== */}
        <div className="text-center mt-4">
          <Button
            href="https://wa.me/628xxxxxxxxxx"
            className="d-inline-flex align-items-center gap-2 px-4 py-2"
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "12px",
              backgroundColor: "#ffffff",
              color: "#1b5e20",
              border: "none",
            }}
          >
            <i className="bi bi-whatsapp fs-5"></i>
            Konsultasi & Pemesanan
          </Button>

          <p
            style={{
              fontSize: "0.8rem",
              marginTop: "0.9rem",
              color: "#c8e6c9",
            }}
          >
            Produk resmi • Bibit unggulan • Jam kerja 06.00 – 18.00
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
