"use client";

import Cta from "@/components/component/Cta";
import GenerateTweetCta from "@/components/component/GenerateTweetCta";
import HeroSection from "@/components/landing/HeroSection";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Edit, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <HeroSection />
    </div>
  );
}
export default Home;
