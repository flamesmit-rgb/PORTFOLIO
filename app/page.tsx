import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Proof from "@/components/Proof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/ui/Marquee";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import Intro from "@/components/Intro";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Intro />
      <Cursor />
      <ScrollProgress />
      <Grain />
      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <Showreel />
        <Projects />
        <Services />
        <About />
        <Skills />
        <Process />
        <Proof />
        <Contact />
      </main>

      <Footer />
    </>
  );
}