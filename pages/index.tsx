import Head from "next/head";
import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth selection:bg-none selection:text-[#37b3ed]">
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

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        {/* Projects */}
      </section>

      {/* Contact Me */}
    </div>
  );
}
