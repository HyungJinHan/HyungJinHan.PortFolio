import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>HyungJin Han&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skill */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
