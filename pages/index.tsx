/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import TotalExperience from "@/components/experience/TotalExperience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/project/Projects";
import ContactMe from "@/components/contactMe/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import { GetServerSideProps } from "next";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth selection:bg-none selection:text-[#37b3ed] scrollbar-thin scrollbar-[#242424] scrollbar-thumb-[#37b3ed]/80">
      <Head>
        <title>Hyung-Jin Han&apos;s Portfolio</title>
        <link rel="icon" href="/AREmoji/AREmojiPic3.png" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <TotalExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-5 w-full z-30">
        <div className="flex items-center justify-end pr-5">
          <Link href="#hero">
            <img
              className="h-14 w-14 rounded-full filter grayscale hover:grayscale-0 hover:text-[#37b3ed] transition-all duration-300 ease-in-out"
              src="/AREmoji/AREmojiGif8.gif"
              alt="footerImage"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // GetStaticProps의 경우 서버에서 불러오는 데이터를 처리하는 방식이 아니기 때문에 build 에러
  // GetServerSideProps로 변경 후 데이터 불러오기 성공 (build 할 때)
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};
