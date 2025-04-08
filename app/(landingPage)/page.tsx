"use client";

import Accordian from "@/app/_components/landing/Accordian";
import DemoTweets from "@/app/_components/landing/DemoTweets";
import DemoVideo from "@/app/_components/landing/DemoVideo";
import FeaturesSection from "@/app/_components/landing/FeaturesSection";
import Footer from "@/app/_components/landing/Footer";
import HeroSection from "@/app/_components/landing/HeroSection";
import HowItWorks from "@/app/_components/landing/HowItWorks";
import PricingSection from "@/app/_components/landing/PricingSection";

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
