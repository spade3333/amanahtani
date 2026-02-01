import { Container, Row, Col, Card } from "react-bootstrap";

// IMPORT LOGO PNG
import ShopeeLogo from "../assets/logo/shopee.png";
import TokopediaLogo from "../assets/logo/tokopedia.png";
import TiktokShopLogo from "../assets/logo/tiktokshop.png";

function Marketplace() {
  const marketplaces = [
    {
      name: "Shopee",
      logo: ShopeeLogo,
      link: "https://shopee.co.id/",
    },
    {
      name: "Tokopedia",
      logo: TokopediaLogo,
      link: "https://www.tokopedia.com/",
    },
    {
      name: "TikTok Shop",
      logo: TiktokShopLogo,
      link: "https://www.tiktok.com/shop",
    },
  ];

  return (
    <section
      id="marketplace"
      style={{
        backgroundColor: "#f8fafc",
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
      }}
    >
      <Container className="text-center">
        {/* JUDUL */}
        <h2
          style={{
            fontWeight: 700,
            color: "#0b1f3a",
            marginBottom: "0.6rem",
          }}
        >
          Marketplace
        </h2>

        {/* SUBHEADLINE */}
        <p
          style={{
            fontSize: "0.9rem",
            color: "#6b7280",
            marginBottom: "2.5rem",
          }}
        >
          Temukan dan beli produk kami melalui marketplace resmi kami.
        </p>

        <Row className="justify-content-center g-4">
          {marketplaces.map((item, index) => (
            <Col xs={4} md={2} key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  className="h-100"
                  style={{
                    border: "none",
                    borderRadius: "16px",
                    padding: "1.6rem 0.75rem",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  {/* LOGO PNG */}
                  <img
                    src={item.logo}
                    alt={item.name}
                    style={{
                      height: "42px", // sedikit lebih besar untuk PNG
                      maxWidth: "120px", // mencegah logo kepanjangan
                      objectFit: "contain",
                      marginBottom: "0.9rem",
                    }}
                  />

                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      marginBottom: 0,
                    }}
                  >
                    {item.name}
                  </p>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Marketplace;
