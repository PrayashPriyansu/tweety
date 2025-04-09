"use client";

import BrandBriefSection from "@/app/_components/context/BrandBriefTextSection";
import RulesSection from "@/app/_components/context/RulesSection";
import TopicsSection from "@/app/_components/context/TopicsSection";
import { useState } from "react";

export default function ContextPage() {
  const [view, setView] = useState<"brief" | "rules" | "topics">("brief");

  return (
    <div className="w-full bg-gray-950 text-white py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]  gap-10 h-full">
        <div className="mb-10 h-full">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Brand Setup
          </h1>
          <div className="flex flex-col justify-center gap-4">
            <button
              onClick={() => setView("brief")}
              className={`px-4 py-2 rounded-md text-sm transition-colors duration-200 cursor-pointer ${
                view === "brief"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Brand Brief
            </button>
            <button
              onClick={() => setView("rules")}
              className={`px-4 py-2 rounded-md text-sm transition-colors duration-200 cursor-pointer ${
                view === "rules"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Rules
            </button>
            <button
              onClick={() => setView("topics")}
              className={`px-4 py-2 rounded-md text-sm transition-colors duration-200 cursor-pointer ${
                view === "topics"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Topics
            </button>
          </div>
        </div>

        <div className="w-full">
          {view === "brief" && <BrandBriefSection />}
          {view === "rules" && <RulesSection />}
          {view === "topics" && <TopicsSection />}
        </div>
      </div>
    </div>
  );
}
