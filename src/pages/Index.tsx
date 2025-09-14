import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SportsEducationSection from "@/components/SportsEducationSection";
import ImgCampsSection from "@/components/ImgCampsSection";
import BoardingSchoolSection from "@/components/BoardingSchoolSection";
import WorldClassInstallationsSection from "@/components/WorldClassInstallationsSection";
import ContactHelpSection from "@/components/ContactHelpSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <SportsEducationSection />
        <WorldClassInstallationsSection />
        <ImgCampsSection />
        <BoardingSchoolSection />
        <ContactHelpSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
