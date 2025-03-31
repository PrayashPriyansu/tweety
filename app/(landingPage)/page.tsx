"use client";

import Accordian from "@/components/landing/Accordian";
import DemoTweets from "@/components/landing/DemoTweets";
import DemoVideo from "@/components/landing/DemoVideo";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";

function Home() {
  return (
    <div className="flex flex-col  items-center h-fit">
      <HeroSection />
      <DemoVideo />
      <DemoTweets />

      <FeaturesSection />
      <HowItWorks />

      <Accordian />
      <PricingSection />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}
export default Home;
