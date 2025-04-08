"use client";

import { useState } from "react";

interface RuleItemProps {
  rule: string;
  onDelete: () => void;
}

function RuleItem({ rule, onDelete }: RuleItemProps) {
  return (
    <div className="flex  items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-md shadow-sm">
      <span className="text-sm">{rule}</span>
      <button
        onClick={onDelete}
        className="ml-3 text-red-400 hover:text-red-500 text-xs"
      >
        ✕
      </button>
    </div>
  );
}

export default function RulesSection() {
  const [rules, setRules] = useState<string[]>([]);
  const [newRule, setNewRule] = useState("");

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
    <div className="animate-reveal">
      <label className="block mb-2 text-sm font-medium text-gray-300">
        📌 Rules for the AI to Follow
      </label>
      <div className="flex items-center gap-3 mb-4">
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
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {rules.map((rule, idx) => (
          <RuleItem key={idx} rule={rule} onDelete={() => removeRule(idx)} />
        ))}
        {rules.length === 0 && (
          <p className="text-gray-500 text-sm">No rules added yet.</p>
        )}
      </div>
    </div>
  );
}
