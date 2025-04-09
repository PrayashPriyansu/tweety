"use client";

import { useState } from "react";

interface RuleItemProps {
  rule: string;
  index: number;
  onDelete: () => void;
}

function RuleItem({ rule, onDelete, index }: RuleItemProps) {
  return (
    <div className="flex items-center justify-between hover:ring ring-red-400 transition-colors duration-200 gap-2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-sm group">
      <div>
        <span className="font-semibold text-purple-500">{index + 1}.</span>
        <span className="text-sm">{rule}</span>
      </div>
      <button
        onClick={onDelete}
        className="ml-3 cursor-pointer hover:bg-gray-600 rounded-full size-5 text-red-400 hover:text-red-300 text-xs opacity-0 group-hover:opacity-100 transition-colors duration-200"
        title="Remove rule"
      >
        ✕
      </button>
    </div>
  );
}

export default function RulesSection() {
  const [rules, setRules] = useState<string[]>([]);
  const [newRule, setNewRule] = useState("");
  const [showGuide, setShowGuide] = useState(false);

  const handleAddRule = () => {
    const trimmed = newRule.trim();
    if (trimmed && !rules.includes(trimmed)) {
      setRules([...rules, trimmed]);
      setNewRule("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddRule();
    }
  };

  const removeRule = (index: number) => {
    setRules((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="animate-reveal h-full space-y-4">
      <div>
        <div
          className="flex items-center justify-between cursor-pointer select-none"
          onClick={() => setShowGuide(!showGuide)}
        >
          <label className="block text-sm font-semibold text-white">
            📌 Rules for the AI to Follow
          </label>
          <span className="text-xs text-gray-400">
            {showGuide ? "Hide Guide ▲" : "Show Guide ▼"}
          </span>
        </div>

        {showGuide && (
          <div className="mt-2 text-gray-400 text-sm bg-gray-900 rounded-md p-3 transition-all duration-300">
            These are writing rules that act like a style guide. You can use
            them to control grammar, tone, or formatting.
            <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1 text-xs">
              <li>Avoid all-caps</li>
              <li>Don’t use emojis unless necessary</li>
              <li>Keep sentences short and clear</li>
              <li>No slang or informal words</li>
              <li>Use neutral and consistent punctuation</li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          value={newRule}
          onChange={(e) => setNewRule(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='e.g. "Avoid slang", "Be concise"...'
          className="flex-grow bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-gray-400"
        />
        <button
          type="button"
          onClick={handleAddRule}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
        >
          Add
        </button>
      </div>

      <div className="max-h-full border border-purple-700  rounded-xl p-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-purple-600   scrollbar-track-gray-800">
        {rules.length > 0 ? (
          <div className="space-y-2">
            {rules.map((rule, idx) => (
              <RuleItem
                key={idx}
                index={idx}
                rule={rule}
                onDelete={() => removeRule(idx)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm italic">
            No rules added yet. Start by entering one above 👆
          </p>
        )}
      </div>
    </div>
  );
}
