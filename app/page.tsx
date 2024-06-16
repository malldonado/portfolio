import Skills from "@/components/skills/skills";
import Navbar from "@/components/navbar/navbar";
import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black">
      <Navbar />
      <Hero/>
      <Projects />
      <Skills />
      <About />
      <Footer/>
    </main>
  );
}
