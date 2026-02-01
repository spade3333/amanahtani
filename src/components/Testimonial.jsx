import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

function Testimonial() {
  const testimonials = [
    {
      text: "Kualitas produknya sangat baik dan sesuai dengan deskripsi. Proses pemesanan juga mudah.",
      name: "Pelanggan Terverifikasi",
    },
    {
      text: "Admin responsif dan informatif. Pengiriman cepat dan produk diterima dengan aman.",
      name: "Pelanggan Terverifikasi",
    },
    {
      text: "Pengalaman belanja yang memuaskan. Produk rapi, original, dan bisa dipercaya.",
      name: "Pelanggan Terverifikasi",
    },
  ];

  const cardStyle = {
    border: "none",
    borderRadius: "18px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
    padding: "2rem 1.8rem",
  };

  return (
    <section
      id="testimoni"
      style={{
        background: "linear-gradient(180deg, #f4f8ff 0%, #ffffff 80%)",
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
            color: "#0b1f3a",
            marginBottom: "0.5rem",
          }}
        >
          Testimoni Pelanggan
        </h2>

        {/* SUBTITLE */}
        <p
          className="text-center"
          style={{
            fontSize: "0.9rem",
            color: "#64748b",
            maxWidth: "520px",
            margin: "0 auto 3rem auto",
            lineHeight: "1.6",
          }}
        >
          Beberapa pengalaman pelanggan yang telah berbelanja dan menggunakan
          produk kami sebagai bentuk kepercayaan dan kepuasan.
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
                      color: "#0d6efd",
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
                      color: "#64748b",
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
                    color: "#0d6efd",
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
                    color: "#64748b",
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
