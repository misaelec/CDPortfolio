import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
// import Feed from "@/components/Feed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffff1]">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      {/* <Feed /> */}
      <Contact />
      <Footer />
    </main>
  );
}
