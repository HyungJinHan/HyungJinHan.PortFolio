import Head from "next/head";
import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/project/Projects";
import ContactMe from "@/components/contactMe/ContactMe";

export default function Home() {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth selection:bg-none selection:text-[#37b3ed] scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80">
      <Head>
        <title>Hyung-Jin Han&apos;s Portfolio</title>
        <link rel="icon" href="/AREmoji/AREmojiPic3.png" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
