import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import MediaSocial from "./components/MediaSocial"; // <-- import baru
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Product />

      {/* Tambahkan MediaSocial di sini */}
      <section
        style={{
          backgroundColor: "#e8f5e9", // hijau muda lembut sesuai tema
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="container text-center">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              marginBottom: "1.5rem",
              color: "#1b5e20",
            }}
          >
            Ikuti Kami di Media Sosial
          </h2>
          <MediaSocial />
        </div>
      </section>

      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
