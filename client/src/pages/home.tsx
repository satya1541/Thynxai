import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ServicesOverview from "@/components/landing/ServicesOverview";
import ServiceDetails from "@/components/landing/ServiceDetails";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyChoose from "@/components/landing/WhyChoose";
import Stats from "@/components/landing/Stats";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <ServiceDetails />
        <HowItWorks />
        <WhyChoose />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
