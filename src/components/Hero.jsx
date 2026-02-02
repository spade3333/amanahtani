import { Container, Button } from "react-bootstrap";
import heropf from "../assets/images/heropf.jpg";
import parfume from "../assets/images/parfume.png";

function Hero() {
  const fontStyle = { fontFamily: "'Playfair Display', serif" };

  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: `url(${heropf}) center/cover no-repeat`,
        position: "relative",
        color: "#ffffff",
      }}
    >
      {/* Overlay gelap */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      <Container
        className="text-center"
        style={{
          maxWidth: "560px",
          paddingTop: "4.5rem",
          paddingBottom: "4.5rem",
          position: "relative",
          zIndex: 2,
          ...fontStyle,
        }}
      >
        {/* HEADLINE */}
        <h1
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
            lineHeight: "1.25",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            color: "#ffffff",
            ...fontStyle,
          }}
        >
          Wewangian Premium
          <br />
          Eksklusif untuk Anda
        </h1>

        {/* SUBHEADLINE */}
        <p
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
            lineHeight: "1.6",
            marginBottom: "2.4rem",
            color: "#ffffffcc",
            ...fontStyle,
          }}
        >
          Temukan aroma yang memikat, elegan, dan tahan lama. Pesan sekarang dan
          nikmati pengalaman parfum mewah di rumah Anda.
        </p>

        {/* GAMBAR PARFUM + CTA */}
        <div style={{ marginTop: "1.2rem" }}>
          {/* GAMBAR PARFUM */}
          <div
            className="d-flex align-items-center justify-content-center mx-auto"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              marginBottom: "2rem",
              overflow: "hidden",
            }}
          >
            <img
              src={parfume}
              alt="Parfum"
              style={{
                width: "80%",
                height: "80%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* CTA */}
          <Button
            variant="light"
            href="https://wa.me/628xxxxxxxxxx"
            className="w-100 d-flex align-items-center justify-content-center gap-2 py-2"
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              borderRadius: "12px",
              color: "#000",
              ...fontStyle,
            }}
          >
            <i className="bi bi-whatsapp fs-5"></i>
            Pesan via WhatsApp
          </Button>

          {/* MICRO TRUST */}
          <p
            style={{
              fontSize: "0.8rem",
              marginTop: "1rem",
              color: "#ffffffcc",
              ...fontStyle,
            }}
          >
            Respon cepat • Produk asli • Pengiriman aman
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
