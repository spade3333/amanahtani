import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

// IMPORT GAMBAR PRODUK
import tani1 from "../assets/images/tani1.jpg";
import tani2 from "../assets/images/tani2.jpg";
import tani3 from "../assets/images/tani3.jpg";
import tani4 from "../assets/images/tani4.jpg";
import tani5 from "../assets/images/tani5.jpg";
import tani6 from "../assets/images/tani6.jpg";
import tani7 from "../assets/images/tani7.jpg";
import tani8 from "../assets/images/tani8.jpg";
import tani9 from "../assets/images/tani9.jpg";
import tani10 from "../assets/images/tani10.jpg";
import tani11 from "../assets/images/tani11.jpg";
import tani12 from "../assets/images/tani12.jpg";

function Product() {
  const products = [
    { id: 1, name: "Pestisida Organik", price: "Rp 25.000", image: tani1 },
    { id: 2, name: "Herbisida Ampuh", price: "Rp 35.000", image: tani2 },
    { id: 3, name: "Fungisida Tanaman", price: "Rp 40.000", image: tani3 },
    { id: 4, name: "Pupuk Cair Premium", price: "Rp 30.000", image: tani4 },
    { id: 5, name: "Bibit Padi Unggul", price: "Rp 15.000", image: tani5 },
    { id: 6, name: "Bibit Jagung Hybrid", price: "Rp 18.000", image: tani6 },
    { id: 7, name: "Bibit Cabai Merah", price: "Rp 12.000", image: tani7 },
    { id: 8, name: "Bibit Tomat Unggul", price: "Rp 12.000", image: tani8 },
    { id: 9, name: "ZPT Perangsang Tumbuh", price: "Rp 28.000", image: tani9 },
    { id: 10, name: "Insektisida Alami", price: "Rp 32.000", image: tani10 },
    { id: 11, name: "Pupuk Granul", price: "Rp 45.000", image: tani11 },
    { id: 12, name: "Bibit Sayuran Pack", price: "Rp 10.000", image: tani12 },
  ];

  // MOBILE: 2 produk per slide
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
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        overflow: "hidden",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {/* IMAGE */}
      <Card.Img
        src={item.image}
        alt={item.name}
        style={{
          height: "200px",
          objectFit: "cover",
          width: "100%",
        }}
      />

      <Card.Body style={{ padding: "0.9rem" }}>
        {/* NAMA */}
        <Card.Title
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            marginBottom: "0.2rem",
            color: "#1b5e20",
          }}
        >
          {item.name}
        </Card.Title>

        {/* LABEL HARGA */}
        <div
          style={{
            fontSize: "0.7rem",
            color: "#6b7280",
          }}
        >
          Harga
        </div>

        {/* HARGA */}
        <div
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "#2e7d32",
            marginBottom: "0.8rem",
          }}
        >
          {item.price}
        </div>

        {/* CTA */}
        <Button
          href="https://wa.me/628xxxxxxxxxx"
          size="sm"
          className="w-100 d-flex align-items-center justify-content-center gap-1"
          style={{
            fontSize: "0.75rem",
            borderRadius: "12px",
            padding: "0.45rem",
            backgroundColor: "#2e7d32",
            border: "none",
          }}
        >
          <i className="bi bi-whatsapp"></i>
          Tanya & Pesan
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <section
      id="product"
      style={{
        backgroundColor: "#f1f8f4",
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
      }}
    >
      <Container>
        <h2
          className="text-center"
          style={{
            fontWeight: 700,
            color: "#1b5e20",
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
            color: "#4b5563",
            marginBottom: "2.2rem",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Obat pertanian & bibit pack dengan harga terjangkau.
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
        <Row className="g-4 d-none d-md-flex">
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
