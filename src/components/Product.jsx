import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import parfume1 from "../assets/images/parfume1.jpg";
import parfume2 from "../assets/images/parfume2.jpg";
import parfume3 from "../assets/images/parfume3.jpg";
import parfume4 from "../assets/images/parfume4.jpg";

function Product() {
  const products = [
    { id: 1, name: "Eau de Parfum Rose", price: "Rp 450.000", image: parfume1 },
    { id: 2, name: "Vanilla Essence", price: "Rp 480.000", image: parfume2 },
    { id: 3, name: "Citrus Delight", price: "Rp 500.000", image: parfume3 },
    { id: 4, name: "Mystic Oud", price: "Rp 650.000", image: parfume4 },
  ];

  // Mobile slider (2 produk per slide)
  const productPairs = [];
  for (let i = 0; i < products.length; i += 2) {
    productPairs.push(products.slice(i, i + 2));
  }

  const ProductCard = ({ item }) => (
    <Card
      className="h-100 text-center"
      style={{
        border: "none",
        borderRadius: "18px",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        color: "#ffffff",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {/* IMAGE */}
      <Card.Img
        src={item.image}
        alt={item.name}
        style={{
          height: "220px", // lebih tinggi untuk desktop
          objectFit: "contain",
          margin: 0,
          width: "100%", // menempel ke sisi card
          borderRadius: "12px 12px 0 0",
        }}
      />

      <Card.Body style={{ padding: "0.8rem 0.9rem" }}>
        {/* NAMA */}
        <Card.Title
          style={{
            fontSize: "0.95rem",
            fontWeight: 600,
            marginBottom: "0.3rem",
            color: "#ffffff",
          }}
        >
          {item.name}
        </Card.Title>

        {/* HARGA */}
        <div
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#facc15",
            marginBottom: "0.8rem",
          }}
        >
          {item.price}
        </div>

        {/* CTA */}
        <Button
          variant="light"
          size="sm"
          href="https://wa.me/628xxxxxxxxxx"
          className="w-100 d-flex align-items-center justify-content-center gap-1"
          style={{
            fontSize: "0.75rem",
            borderRadius: "12px",
            padding: "0.45rem",
            fontFamily: "'Playfair Display', serif",
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
        backgroundColor: "#0b0b0b",
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
      }}
    >
      <Container>
        <h2
          className="text-center"
          style={{
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "0.4rem",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Produk Kami
        </h2>

        <p
          className="text-center"
          style={{
            fontSize: "0.85rem",
            color: "#d1d5db",
            marginBottom: "2.2rem",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Koleksi parfum eksklusif, siap dipesan langsung via WhatsApp.
        </p>

        {/* MOBILE */}
        <div className="d-md-none">
          <Carousel indicators={false} interval={3500}>
            {productPairs.map((pair, index) => (
              <Carousel.Item key={index}>
                <Row className="g-3">
                  {pair.map((item) => (
                    <Col xs={6} key={item.id}>
                      <ProductCard item={item} />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* DESKTOP */}
        <Row className="g-3 d-none d-md-flex">
          {products.map((item) => (
            <Col md={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Product;
