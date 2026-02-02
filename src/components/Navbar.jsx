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
        variant="dark"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(8px)",
          padding: "0.5rem 0",
          height: "56px",
          zIndex: 1030,
        }}
        className="shadow-sm"
      >
        <Container style={{ maxWidth: "1100px" }} className="position-relative">
          {/* LOGO */}
          <Navbar.Brand
            href="#home"
            onClick={() => setExpanded(false)}
            style={{ fontSize: "1.3rem" }}
          >
            <img
              src="/logo.png"
              alt="Brand Logo"
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Navbar.Brand>

          {/* BRAND CENTER (MOBILE ONLY) */}
          <div
            className="d-lg-none"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#ffffff",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "2px",
            }}
          >
            Mystery Parfume
          </div>

          {/* BRAND DESKTOP */}
          <Navbar.Brand
            href="#home"
            className="d-none d-lg-block"
            style={{
              fontWeight: 700,
              color: "#ffffff",
              marginLeft: "0.4rem",
            }}
          >
            Mystery Parfume
          </Navbar.Brand>

          {/* CUSTOM BURGER TOGGLE */}
          <Navbar.Toggle
            aria-controls="main-navbar"
            className="ms-auto d-lg-none"
            onClick={() => setExpanded(!expanded)}
          >
            <div
              style={{
                width: "28px",
                height: "18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    height: "2px",
                    width: "100%",
                    backgroundColor: "#ffffff",
                    borderRadius: "1px",
                    transition: "all 0.3s ease",
                    transform:
                      expanded && i === 0
                        ? "rotate(45deg) translateY(7px)"
                        : expanded && i === 1
                          ? "scaleX(0)"
                          : expanded && i === 2
                            ? "rotate(-45deg) translateY(-7px)"
                            : "none",
                  }}
                ></span>
              ))}
            </div>
          </Navbar.Toggle>

          {/* DESKTOP MENU */}
          <Navbar.Collapse
            id="main-navbar"
            className="d-none d-lg-flex justify-content-end"
          >
            <Nav className="gap-3">
              <Nav.Link href="#home" style={{ color: "#ffffff" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: "#ffffff" }}>
                About
              </Nav.Link>
              <Nav.Link href="#product" style={{ color: "#ffffff" }}>
                Product
              </Nav.Link>
              <Nav.Link href="#testimoni" style={{ color: "#ffffff" }}>
                Testimoni
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MOBILE MENU */}
      {expanded && (
        <div
          className="d-lg-none shadow-sm"
          style={{
            position: "fixed",
            top: "56px",
            width: "100%",
            zIndex: 1029,
            backgroundColor: "rgba(0, 0, 0, 0.95)",
          }}
        >
          <Nav className="flex-column text-center py-3 gap-2">
            <Nav.Link
              href="#home"
              onClick={() => setExpanded(false)}
              style={{ color: "#ffffff" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={() => setExpanded(false)}
              style={{ color: "#ffffff" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#product"
              onClick={() => setExpanded(false)}
              style={{ color: "#ffffff" }}
            >
              Product
            </Nav.Link>
            <Nav.Link
              href="#testimoni"
              onClick={() => setExpanded(false)}
              style={{ color: "#ffffff" }}
            >
              Testimoni
            </Nav.Link>
          </Nav>
        </div>
      )}
    </>
  );
}

export default Navigation;
