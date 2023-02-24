import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Head>
        <title>HyungJin Han&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.png" />
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

      <section id="skill" className="snap-center">
        {/* Skill */}
      </section>

      <section id="projects" className="snap-center">
        {/* Projects */}
      </section>

      {/* Contact Me */}
    </div>
  );
}
