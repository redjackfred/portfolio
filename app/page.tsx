import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ParticleCanvas from "@/components/three/ParticleCanvasClient"

export default function HomePage() {
  return (
    <>
      {/* Three.js particle background — rendered behind everything */}
      <ParticleCanvas />

      {/* Page content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
