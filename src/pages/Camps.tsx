import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampComparisonSection from "@/components/CampComparisonSection";
import CampDetailsSection from "@/components/CampDetailsSection";
import BookingInfoSection from "@/components/BookingInfoSection";
import SportsCarouselSection from "@/components/SportsCarouselSection";
import LoyaltyBenefitsSection from "@/components/LoyaltyBenefitsSection";
import GroupBenefitsSection from "@/components/GroupBenefitsSection";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
const Camps = () => {
  const campsCarouselImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `/carousel_images/camps_carousel/${i + 1}.${i === 0 || i === 9 ? 'JPG' : 'jpg'}`,
    alt: `Camps Image ${i + 1}`
  }));

  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Programas IMG Academy
            </h1>
            
          </div>
        </section>

        <AutoScrollCarousel 
          images={campsCarouselImages} 
          height="h-96" 
          delay={3000} 
        />

        <CampComparisonSection />
        <CampDetailsSection />
        <BookingInfoSection />
        <SportsCarouselSection />
        <LoyaltyBenefitsSection />
        <GroupBenefitsSection />
      </main>
      <Footer />
    </div>;
};
export default Camps;