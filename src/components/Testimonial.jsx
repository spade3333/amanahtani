import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

function Testimonial() {
  const testimonials = [
    {
      text: "Aromanya sangat memikat dan tahan lama. Pengiriman cepat, produk diterima dengan aman dan rapi.",
      name: "Pelanggan Terverifikasi",
    },
    {
      text: "Kualitas parfum premium, kemasan elegan, dan pelayanan sangat memuaskan. Sangat direkomendasikan.",
      name: "Pelanggan Terverifikasi",
    },
    {
      text: "Belanja mudah via WhatsApp. Aroma mewah dan eksklusif membuat pengalaman belanja saya tak terlupakan.",
      name: "Pelanggan Terverifikasi",
    },
  ];

  const cardStyle = {
    border: "none",
    borderRadius: "18px",
    backgroundColor: "rgba(255, 255, 255, 0.05)", // transparan elegan
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
    padding: "2rem 1.8rem",
    color: "#ffffff",
    fontFamily: "'Playfair Display', serif",
  };

  return (
    <section
      id="testimoni"
      style={{
        backgroundColor: "#0b0b0b", // gelap premium
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
            color: "#ffffff",
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
            color: "#d1d5db",
            maxWidth: "520px",
            margin: "0 auto 3rem auto",
            lineHeight: "1.6",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Beberapa pengalaman pelanggan yang telah merasakan parfum eksklusif
          kami sebagai simbol aroma premium dan layanan terbaik.
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
                      color: "#facc15", // warna emas premium
                      marginBottom: "1rem",
                    }}
                  >
                    <i className="bi bi-quote"></i>
                  </div>

                  <Card.Text
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.7",
                      color: "#e5e7eb",
                      marginBottom: "1.4rem",
                    }}
                  >
                    “{item.text}”
                  </Card.Text>

                  <small
                    style={{
                      fontSize: "0.8rem",
                      color: "#d1d5db",
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
                    color: "#facc15",
                    marginBottom: "1rem",
                  }}
                >
                  <i className="bi bi-quote"></i>
                </div>

                <Card.Text
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                    color: "#e5e7eb",
                    marginBottom: "1.4rem",
                  }}
                >
                  “{item.text}”
                </Card.Text>

                <small
                  style={{
                    fontSize: "0.8rem",
                    color: "#d1d5db",
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
