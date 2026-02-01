import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        variant="light"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(8px)",
          padding: "0.5rem 0",
          height: "56px", // KUNCI: tinggi navbar tetap
          zIndex: 1030,
        }}
        className="shadow-sm"
      >
        <Container style={{ maxWidth: "1100px" }} className="position-relative">
          {/* LOGO — KIRI */}
          <Navbar.Brand
            href="#home"
            onClick={() => setExpanded(false)}
            style={{
              display: "flex",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>🛍️</span>
          </Navbar.Brand>

          {/* BRAND NAME — TENGAH (MOBILE ONLY, FIXED) */}
          <div
            className="d-lg-none"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#0b1f3a",
              pointerEvents: "none", // tidak ikut klik
              zIndex: 1,
              whiteSpace: "nowrap",
            }}
          >
            BrandName
          </div>

          {/* BRAND DESKTOP */}
          <Navbar.Brand
            href="#home"
            onClick={() => setExpanded(false)}
            className="d-none d-lg-block"
            style={{
              fontWeight: 700,
              color: "#0b1f3a",
              marginLeft: "0.4rem",
            }}
          >
            BrandName
          </Navbar.Brand>

          {/* BURGER — KANAN */}
          <Navbar.Toggle
            aria-controls="main-navbar"
            className="ms-auto"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
        </Container>
      </Navbar>

      {/* MENU — TURUN DI BAWAH NAVBAR */}
      <Navbar.Collapse
        id="main-navbar"
        className={`bg-white shadow-sm ${expanded ? "show" : ""}`}
        style={{
          position: "fixed",
          top: "56px", // persis di bawah navbar
          width: "100%",
          zIndex: 1029,
        }}
      >
        <Container>
          <Nav className="flex-column text-center py-3 gap-2">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link href="#product" onClick={() => setExpanded(false)}>
              Product
            </Nav.Link>
            <Nav.Link href="#testimoni" onClick={() => setExpanded(false)}>
              Testimoni
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </>
  );
}

export default Navigation;
