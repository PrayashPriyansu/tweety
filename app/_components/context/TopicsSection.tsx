"use client";

import { useState } from "react";

export default function TopicsSection() {
  const [topics, setTopics] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTopic = () => {
    const trimmed = input.trim();
    if (trimmed && !topics.includes(trimmed)) {
      setTopics([...topics, trimmed]);
      setInput("");
    }
  };

  const removeTopic = (topic: string) => {
    setTopics((prev) => prev.filter((t) => t !== topic));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTopic();
    }
  };

  return (
    <div className="animate-reveal space-y-4 h-full">
      <div>
        <label className="block text-sm font-semibold text-white mb-1">
          🎯 Topics You Like to Talk About
        </label>
        <p className="text-gray-400 text-sm mb-2">
          These help the AI understand your interests and tone.
          <br />
          <span className="text-xs text-gray-500">
            e.g. “AI”, “Startups”, “Mental models”, “Productivity”...
          </span>
        </p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='e.g. "Philosophy", "Coding", "Design"'
          className="flex-grow bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-gray-400"
        />
        <button
          type="button"
          onClick={addTopic}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
        >
          Add
        </button>
      </div>

      <div className="max-h-full overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
        {topics.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <div
                key={topic}
                className="group bg-gray-800 text-white px-4 py-1.5 rounded-full flex items-center text-sm shadow-sm transition-all"
              >
                <span>{topic}</span>
                <button
                  onClick={() => removeTopic(topic)}
                  className="ml-2 text-red-400 hover:text-red-500 text-xs opacity-0 group-hover:opacity-100 transition"
                  title="Remove topic"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm italic">
            No topics added yet. Start by entering one above 👆
          </p>
        )}
      </div>
    </div>
  );
}
