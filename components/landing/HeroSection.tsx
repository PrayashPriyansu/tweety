"use client";
import { motion } from "motion/react";
import PillInfo from "./PillInfo";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-24 bg-white h-screen prose flex flex-col items-center text-center px-6">
      <PillInfo>Introducing Tweety AI</PillInfo>

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-tight   text-gray-900 dark:text-white "
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
        className="mt-4 text-lg md:text-xl text-gray-600  dark:text-gray-300 max-w-2xl "
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
        <button className="px-6 flex items-center gap-2 py-3 hover:-translate-1 duration-300 bg-black text-white  font-medium rounded-full shadow-lg hover:shadow-2xl hover:bg-slate-900 transition  active:scale-95 cursor-pointer active:translate-1">
          Get Started For Free
          <ArrowRight />
        </button>

        <a
          href="#features"
          className="px-6 py-3  text-lg font-medium rounded-full bg-gray-200 shadow-lg hover:shadow-2xl hover:-translate-1 transition duration-300 border"
        >
          View Demo
        </a>
      </motion.div>
      {/* 
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 -z-10"></div> */}
    </section>
  );
}
