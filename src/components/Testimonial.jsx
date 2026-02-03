import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

function Testimonial() {
  const testimonials = [
    {
      text: "Produk pertaniannya berkualitas, tanaman jadi lebih sehat dan hasil panen meningkat. Pengiriman juga cepat dan aman.",
      name: "Petani Terverifikasi",
    },
    {
      text: "Pupuk dan obat tanaman sesuai kebutuhan. Pelayanan ramah dan mudah konsultasi lewat WhatsApp.",
      name: "Petani Terverifikasi",
    },
    {
      text: "Bibit tumbuh bagus dan seragam. Sangat membantu usaha tani saya, pasti akan order lagi.",
      name: "Petani Terverifikasi",
    },
  ];

  const cardStyle = {
    border: "none",
    borderRadius: "18px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
    padding: "2rem 1.8rem",
    color: "#1b5e20",
    fontFamily: "'Playfair Display', serif",
  };

  return (
    <section
      id="testimoni"
      style={{
        backgroundColor: "#f1f8f4", // hijau lembut selaras produk
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <Container>
        {/* JUDUL */}
        <h2
          className="text-center"
          style={{
            fontWeight: 700,
            color: "#1b5e20",
            marginBottom: "0.5rem",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Testimoni Pelanggan
        </h2>

        {/* SUBTITLE */}
        <p
          className="text-center"
          style={{
            fontSize: "0.9rem",
            color: "#4b5563",
            maxWidth: "520px",
            margin: "0 auto 3rem auto",
            lineHeight: "1.6",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Pengalaman para petani yang telah menggunakan produk pertanian kami
          untuk mendukung hasil tanam yang lebih optimal.
        </p>

        {/* ===== MOBILE (SLIDER) ===== */}
        <div className="d-md-none">
          <Carousel indicators={false}>
            {testimonials.map((item, index) => (
              <Carousel.Item key={index}>
                <Card style={cardStyle}>
                  <div
                    style={{
                      fontSize: "1.6rem",
                      color: "#2e7d32",
                      marginBottom: "1rem",
                    }}
                  >
                    <i className="bi bi-quote"></i>
                  </div>

                  <Card.Text
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.7",
                      color: "#374151",
                      marginBottom: "1.4rem",
                    }}
                  >
                    “{item.text}”
                  </Card.Text>

                  <small
                    style={{
                      fontSize: "0.8rem",
                      color: "#6b7280",
                      fontWeight: 500,
                    }}
                  >
                    — {item.name}
                  </small>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* ===== DESKTOP (GRID) ===== */}
        <Row className="g-4 d-none d-md-flex">
          {testimonials.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="h-100" style={cardStyle}>
                <div
                  style={{
                    fontSize: "1.6rem",
                    color: "#2e7d32",
                    marginBottom: "1rem",
                  }}
                >
                  <i className="bi bi-quote"></i>
                </div>

                <Card.Text
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                    color: "#374151",
                    marginBottom: "1.4rem",
                  }}
                >
                  “{item.text}”
                </Card.Text>

                <small
                  style={{
                    fontSize: "0.8rem",
                    color: "#6b7280",
                    fontWeight: 500,
                  }}
                >
                  — {item.name}
                </small>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
