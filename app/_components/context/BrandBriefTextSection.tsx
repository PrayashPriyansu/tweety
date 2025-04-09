"use client";

import { setBriefAction } from "@/app/_components/context/actions";
// import { setBrandBrief } from "@/lib/queries/setBrandBrief";
import { Check, Pencil } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function BrandBriefSection() {
  const [brief, setBrief] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const briefRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = briefRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [brief]);

  useEffect(() => {
    if (isEditing && briefRef.current) {
      briefRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const brief = formData.get("brief");

    if (typeof brief !== "string") {
      console.error("Brief is not a valid string");
      return;
    }

    setBriefAction({ content: brief });
    setIsEditing(false);
  };

  return (
    <section className="animate-reveal space-y-6">
      <header className="text-white">
        <h1 className="text-2xl font-bold">📝 Brand Brief</h1>
        <p className="text-gray-400 mt-1">
          Help the AI understand your brand by writing a short description.
        </p>
      </header>

      <aside className="bg-gray-900 border border-white/10 rounded-xl p-6 shadow-md">
        <div className="mb-4 text-sm">
          <h2 className="text-sm font-semibold text-purple-400 tracking-tight">
            Crafting Your Perfect Bio:
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Key elements to include for a compelling profile.
          </p>
        </div>
        <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
          <li>
            What You Do : Clearly explain your product or service in a concise
            way.
          </li>
          <li>
            Target Audience : Mention who your product or service is
            specifically for.
          </li>
          <li>
            Tone & Vibe : Describe the desired feel using words like "fun,"
            "serious," "casual," or "edgy."
          </li>
          <li>
            Keep it Concise : Be specific and avoid unnecessary jargon or
            lengthy descriptions.
          </li>
        </ul>
      </aside>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex justify-between items-center  ">
          <label htmlFor="brief" className="text-white font-medium text-sm">
            Brand Description
          </label>
          <AnimatePresence mode="wait" initial={false}>
            {isEditing ? (
              <motion.button
                key="save"
                type="submit"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center cursor-pointer justify-center gap-2 px-5 py-2.5 text-sm font-medium text-black bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow transition-all duration-200 focus:ring-1 focus:ring-emerald-300 focus:outline-none"
              >
                <Check size={16} />
                Save Changes
              </motion.button>
            ) : (
              <motion.button
                key="edit"
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={handleEdit}
                className="flex items-center justify-center cursor-pointer  gap-2 px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow transition-all duration-200 focus:ring-1 focus:ring-indigo-300 focus:outline-none"
              >
                <Pencil size={16} />
                Edit Brief
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <textarea
            disabled={!isEditing}
            ref={briefRef}
            id="brief"
            name="brief"
            value={brief}
            maxLength={500}
            onChange={(e) => setBrief(e.target.value)}
            placeholder="Describe your brand's tone, values, audience, and style…"
            className={`w-full bg-gray-800 text-white p-4 rounded-xl resize-none min-h-[120px] transition-all duration-300 ease-in-out placeholder:text-gray-500 
            ${
              isEditing
                ? "ring-1 ring-purple-500 focus:outline-none"
                : "opacity-75 cursor-not-allowed"
            }`}
          />

          {isEditing && (
            <div className="absolute bottom-2 right-3 text-xs text-gray-400 font-mono">
              <span className={brief.length >= 500 ? "text-red-500" : ""}>
                {brief.length}/500
              </span>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
