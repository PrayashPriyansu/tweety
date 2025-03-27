"use client";
import { motion } from "motion/react";
import PillInfo from "./PillInfo";
import { Dot } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-24 h-screen prose flex flex-col items-center text-center px-6">
      <PillInfo icon={Dot}>Introducing NeuroSphere AI Platform</PillInfo>

      <div className="relative max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-tight   text-gray-900 dark:text-white"
        >
          <div>Automate. Optimize. Dominate.</div>
          AI-Powered{" "}
          <span className="underline underline-offset-4 decoration-gray-400 ">
            Tweets
          </span>{" "}
          at Your Fingertips
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-gray-600  dark:text-gray-300 max-w-2xl "
      >
        Boost your Twitter presence with AI-crafted tweets that are smart,
        engaging, and tailored for success
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6"
      >
        <a
          href="#features"
          className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </motion.div>
      {/* 
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 -z-10"></div> */}
    </section>
  );
}
