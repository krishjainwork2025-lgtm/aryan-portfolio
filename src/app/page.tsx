import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import InfoGrid from "@/components/InfoGrid";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] flex flex-col items-center">
      <ScrollyCanvas />
      <Projects />
      <Timeline />
      <InfoGrid />
      <Certifications />
      <Footer />
    </main>
  );
}
