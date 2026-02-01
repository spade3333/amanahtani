import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #cbdbf8 15%, #d0daee 80%, #ffffff 100%)",
      }}
    >
      <Container
        className="text-center"
        style={{
          maxWidth: "520px",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        {/* HEADLINE UTAMA */}
        <h1
          style={{
            fontSize: "2.05rem",
            lineHeight: "1.25",
            fontWeight: 700,
            color: "#0b1f3a",
            marginBottom: "0.9rem",
          }}
        >
          Produk Pilihan,
          <br />
          Kualitas Terjamin
        </h1>

        {/* HEADLINE PENDUKUNG */}
        <p
          style={{
            fontSize: "0.95rem",
            color: "#4a5568",
            marginBottom: "2.2rem",
          }}
        >
          Belanja kebutuhan harian dengan proses mudah, respon cepat, dan
          pengiriman yang dapat diandalkan.
        </p>

        {/* 🔽 GROUP ICON + CTA (DITURUNKAN) */}
        <div style={{ marginTop: "1.4rem" }}>
          {/* ICON BESAR */}
          <div
            className="d-flex align-items-center justify-content-center mx-auto"
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "50%",
              backgroundColor: "#e8f0ff",
              marginBottom: "2.2rem",
            }}
          >
            <i
              className="bi bi-shield-check"
              style={{
                fontSize: "3rem",
                color: "#0d6efd",
              }}
            ></i>
          </div>

          {/* CTA WHATSAPP */}
          <Button
            variant="success"
            href="https://wa.me/628xxxxxxxxxx"
            className="w-100 d-flex align-items-center justify-content-center gap-2 py-2"
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              borderRadius: "12px",
            }}
          >
            <i className="bi bi-whatsapp fs-5"></i>
            Chat via WhatsApp
          </Button>

          {/* MICRO TRUST */}
          <p
            style={{
              fontSize: "0.8rem",
              color: "#6b7280",
              marginTop: "0.9rem",
            }}
          >
            Respon cepat • Admin aktif • Aman & terpercaya
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
