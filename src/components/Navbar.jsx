import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const green = "#2e7d32";
  const greenDark = "#1b5e20";

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(8px)",
          padding: "0.5rem 0",
          height: "56px",
          zIndex: 1030,
          borderBottom: "1px solid #e0e0e0",
        }}
        className="shadow-sm"
      >
        <Container style={{ maxWidth: "1100px" }} className="position-relative">
          {/* LOGO */}
          <Navbar.Brand href="#home" onClick={() => setExpanded(false)}>
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

          {/* BRAND CENTER (MOBILE) */}
          <div
            className="d-lg-none"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: greenDark,
              pointerEvents: "none",
              whiteSpace: "nowrap",
              letterSpacing: "2px",
            }}
          >
            Amanah Tani
          </div>

          {/* BRAND DESKTOP */}
          <Navbar.Brand
            href="#home"
            className="d-none d-lg-block"
            style={{
              fontWeight: 700,
              color: greenDark,
              marginLeft: "0.4rem",
            }}
          >
            Amanah Tani
          </Navbar.Brand>

          {/* BURGER */}
          <Navbar.Toggle
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
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    height: "2px",
                    width: "100%",
                    backgroundColor: green,
                    borderRadius: "2px",
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
                />
              ))}
            </div>
          </Navbar.Toggle>

          {/* DESKTOP MENU */}
          <Navbar.Collapse className="d-none d-lg-flex justify-content-end">
            <Nav className="gap-4">
              {["Home", "About", "Product", "Testimoni"].map((item) => (
                <Nav.Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: greenDark,
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Nav.Link>
              ))}
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
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Nav className="flex-column text-center py-3 gap-2">
            {["Home", "About", "Product", "Testimoni"].map((item) => (
              <Nav.Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setExpanded(false)}
                style={{
                  color: greenDark,
                  fontWeight: 500,
                }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </div>
      )}
    </>
  );
}

export default Navigation;
