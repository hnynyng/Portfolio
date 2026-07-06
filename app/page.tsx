import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex-1">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Journey />
      <Footer />
    </main>
  );
}
