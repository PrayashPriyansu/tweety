"use client";

import { useEffect, useRef, useState } from "react";

export default function BrandBriefSection() {
  const [brief, setBrief] = useState("");
  const briefRef = useRef<HTMLTextAreaElement>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const textarea = briefRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [brief]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log("hello");

    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData);
    setIsEditing(false);
  }

  return (
    <div className="animate-reveal">
      <div className="bg-gray-900 border border-white/10 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-medium mb-3 text-white">
          🧠 What to include:
        </h2>
        <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
          <li>Mention your brand’s mission or values</li>
          <li>
            Describe the tone or personality (e.g. playful, professional,
            quirky)
          </li>
          <li>Specify your target audience</li>
          <li>List any must-include themes or styles</li>
          <li>Keep it concise (max 500 characters)</li>
        </ul>
      </div>

      <form className="relative" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between gap-2 px-10">
          {isEditing ? (
            <button className="cursor-pointer" type="submit">
              Save
            </button>
          ) : (
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>

        <textarea
          disabled={!isEditing}
          ref={briefRef}
          id="brief"
          name="brief"
          value={brief}
          maxLength={500}
          onChange={(e) => setBrief(e.target.value)}
          placeholder="Start describing your brand tone, values, personality..."
          className="w-full bg-gray-800 text-white p-4 rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-200 placeholder:text-gray-400"
        />
        {isEditing && (
          <div
            className={`absolute bottom-2 right-3 text-sm font-mono ${
              brief.length >= 500 ? "text-red-500" : "text-gray-400"
            }`}
          >
            {brief.length}/500
          </div>
        )}
      </form>
    </div>
  );
}
