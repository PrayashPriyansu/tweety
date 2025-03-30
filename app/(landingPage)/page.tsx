"use client";

import DemoTweets from "@/components/landing/DemoTweets";
import DemoVideo from "@/components/landing/DemoVideo";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <HeroSection />
      <DemoVideo />
      <DemoTweets />

      <FeaturesSection />
      <HowItWorks />

      <div className="min-h-screen"></div>
    </div>
  );
}
export default Home;
