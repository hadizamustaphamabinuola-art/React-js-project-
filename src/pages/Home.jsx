import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About"
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import QuoteCTA from "../components/QuoteCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import BackToTop from "../components/BackToTop";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats/>
        <About/>
        <Services/>
        <Projects/>
        <WhyChooseUs/>
        <QuoteCTA/>
        <Contact/>
        <Footer/>
        <BackToTop/>
        <FloatingWhatsApp/>
      </main>
      
    </>
  );
}

export default Home;