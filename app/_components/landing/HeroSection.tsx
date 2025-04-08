"use client";
import { motion } from "motion/react";
import PillInfo from "./PillInfo";
import AuroraEffect from "./AuroraEffect";
import HoverButton from "./HoverButton";

export default function Hero() {
  return (
    <section className="relative w-full pt-24 bg-transparent isolate h-screen prose flex flex-col items-center text-center ">
      <PillInfo>Introducing Tweety AI</PillInfo>

      <div className="relative mt-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-tight   text-white "
        >
          <div>Automate. Optimize. Dominate.</div>
          AI-Powered{" "}
          <span className="underline decoration-wavy decoration-2 underline-offset-4 decoration-green-400">
            Tweets
          </span>{" "}
          at Your Fingertips.
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-gray-400  dark:text-gray-300 max-w-2xl "
      >
        Boost your Twitter presence with AI-crafted tweets that are smart,
        engaging, and tailored for success.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 flex gap-5"
      >
        <HoverButton />

        {/* <a
          href="#features"
          className="px-6 py-3  text-lg font-medium rounded-full bg-gray-200 shadow-lg hover:shadow-2xl hover:-translate-1 transition duration-300 border"
        >
          View Demo
        </a> */}
      </motion.div>

      <AuroraEffect />
    </section>
  );
}
