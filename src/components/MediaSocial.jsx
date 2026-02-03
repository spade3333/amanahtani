import { Card, Row, Col } from "react-bootstrap";
import tiktokIcon from "../assets/logo/tiktok.png";
import igIcon from "../assets/logo/instagram.png";
import waIcon from "../assets/logo/whatsapp.png";

function MediaSocial() {
  const socials = [
    {
      name: "TikTok",
      icon: tiktokIcon,
      url: "https://www.tiktok.com/@ardiyanto30",
    },
    {
      name: "Instagram",
      icon: igIcon,
      url: "https://www.instagram.com/amanah.tani_id1",
    },
    {
      name: "WhatsApp",
      icon: waIcon,
      url: "https://wa.me/6288983943409",
    },
  ];

  return (
    <Row className="justify-content-center gx-3">
      {socials.map((item, index) => (
        <Col xs={4} sm={3} md={2} key={index}>
          <Card
            className="text-center"
            style={{
              cursor: "pointer",
              borderRadius: "16px",
              backgroundColor: "rgba(27, 94, 32, 0.1)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              height: "120px", // semua card sama tinggi
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => window.open(item.url, "_blank")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
          >
            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-2">
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: "48px",
                  height: "48px",
                  objectFit: "contain",
                  marginBottom: "0.5rem",
                }}
              />
              <small
                style={{
                  fontWeight: 700,
                  color: "#1b5e20",
                  fontSize: "0.875rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {item.name}
              </small>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MediaSocial;
