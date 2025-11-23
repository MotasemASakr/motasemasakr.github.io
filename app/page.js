import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Publications from "./components/homepage/publications";
import Skills from "./components/homepage/skills";

// Uncomment these if you want to include blog and education sections
// import Blog from "./components/homepage/blog";
// import Education from "./components/homepage/education";

// Uncomment this function if you have a dev.to username
// async function getData() {
//   if (!personalData.devUsername) return [];
//   
//   try {
//     const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
//       next: { revalidate: 3600 } // Revalidate every hour
//     });
//     
//     if (!res.ok) return [];
//     
//     const data = await res.json();
//     return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
//   } catch (error) {
//     console.error('Error fetching blog data:', error);
//     return [];
//   }
// };

export default async function Home() {
  // Uncomment if using blog data
  // const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Publications />
      <Projects />
      <ContactSection />
      {/* Uncomment these sections if needed:
      <Education />
      <Blog blogs={blogs} />
      */}
    </>
  )
};
