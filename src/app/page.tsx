import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <CaseStudy />
      <About />
      <Trust />
      <CTA />
      <Footer />
    </>
  );
}
