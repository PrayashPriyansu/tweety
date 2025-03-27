"use client";

import DemoTweets from "@/components/landing/DemoTweets";
import DemoVideo from "@/components/landing/DemoVideo";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <HeroSection />
      <DemoVideo />
      <DemoTweets />

      <FeaturesSection />

      <div className="min-h-screen"></div>
    </div>
  );
}
export default Home;
