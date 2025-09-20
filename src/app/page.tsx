
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorks from "@/components/sections/HowItWorks";

export default function () {
  return (
    <>
    <HeroSection
    title="Document Your Farm,Track Your Growth"
    subtitle="Easily record planting days,harvest numbers,livestock and more all in one place."
    ctaText="Get Started"
    image="/image01.jpg"
    ></HeroSection>
    <FeatureSection />
    <AboutSection></AboutSection>
    <HowItWorks></HowItWorks>
    <Footer></Footer>
    </>
    
   
  );
}

