import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import produkImage from "../assets/images/produk1.jpg";

function Product() {
  const products = [1, 2, 3, 4];

  // Bagi produk per 2 item (mobile slide)
  const productPairs = [];
  for (let i = 0; i < products.length; i += 2) {
    productPairs.push(products.slice(i, i + 2));
  }

  const ProductCard = ({ item }) => (
    <Card
      className="h-100 text-center"
      style={{
        border: "none",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
        overflow: "hidden",
      }}
    >
      {/* IMAGE */}
      <Card.Img
        src={produkImage}
        alt={`Produk ${item}`}
        style={{
          height: "120px", // DIPERKECIL → muat 1 layar HP
          objectFit: "cover",
        }}
      />

      {/* BODY */}
      <Card.Body
        style={{
          padding: "0.9rem 0.9rem 1.1rem",
        }}
      >
        {/* TITLE */}
        <Card.Title
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            marginBottom: "0.4rem",
            color: "#0b1f3a",
          }}
        >
          Produk {item}
        </Card.Title>

        {/* SUBTITLE MINI */}
        <p
          style={{
            fontSize: "0.7rem",
            color: "#64748b",
            marginBottom: "0.7rem",
          }}
        >
          Kualitas terjamin
        </p>

        {/* CTA */}
        <Button
          variant="outline-success"
          size="sm"
          href="https://wa.me/628xxxxxxxxxx"
          className="d-inline-flex align-items-center justify-content-center gap-1"
          style={{
            fontSize: "0.7rem",
            borderRadius: "10px",
            padding: "0.35rem 0.7rem",
          }}
        >
          <i className="bi bi-whatsapp"></i>
          Pesan
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <section
      id="product"
      style={{
        background: "linear-gradient(180deg, #c1d4f0 0%, #ffffff 100%)",
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
      }}
    >
      <Container>
        {/* JUDUL */}
        <h2
          className="text-center"
          style={{
            fontWeight: 700,
            color: "#0b1f3a",
            marginBottom: "0.4rem",
          }}
        >
          Produk Kami
        </h2>

        {/* SUBHEADLINE */}
        <p
          className="text-center"
          style={{
            fontSize: "0.85rem",
            color: "#64748b",
            marginBottom: "2.2rem",
          }}
        >
          Produk pilihan dengan kualitas terjaga, siap dipesan cepat via
          WhatsApp.
        </p>

        {/* ===== MOBILE: SLIDER (2 produk / slide) ===== */}
        <div className="d-md-none">
          <Carousel indicators={false} interval={3500}>
            {productPairs.map((pair, index) => (
              <Carousel.Item key={index}>
                <Row className="g-3">
                  {pair.map((item) => (
                    <Col xs={6} key={item}>
                      <ProductCard item={item} />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* ===== DESKTOP: GRID ===== */}
        <Row className="g-4 d-none d-md-flex">
          {products.map((item) => (
            <Col md={3} key={item}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Product;
