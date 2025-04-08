"use client";

import { useState } from "react";
import { Loader2, Check, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { LoadingState } from "@/lib/prompts/types";

interface GenerateTweetButtonProps {
  onSubmitTopic: () => void;
  onSubmit: (topic: string, type?: string) => void;
  isLoading: LoadingState;
  topics?: string[];
  onTopicSelect?: (topic: string) => void;
  onRefreshTopics?: () => void;
}

export default function GenerateTweetButton({
  onSubmitTopic,
  onSubmit,
  isLoading,
  topics = [],
}: GenerateTweetButtonProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="flex flex-col grow gap-6 w-full">
      <AnimatePresence mode="wait">
        <motion.div className="w-full h-full p-4 rounded-xl flex justify-center items-center overflow-clip">
          {isLoading === LoadingState.Idle && (
            <GenerateTopicButton onSubmitTopic={onSubmitTopic} />
          )}
          {isLoading === LoadingState.GeneratingTopics && <GeneratingTopics />}
          {isLoading === LoadingState.TopicsReady && (
            <div className="flex flex-col grow gap-6 w-full">
              <TopicList
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
                topics={topics}
              />

              <button
                disabled={!selectedTopic}
                onClick={() => onSubmit(selectedTopic as string)}
                className={`text-white font-medium 
                  rounded-lg px-2 py-3 flex items-center justify-center gap-2
                  shadow-lg hover:shadow-xl ${
                    selectedTopic
                      ? "bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95 hover:scale-y-105"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }  
                  transition-all duration-400`}
              >
                {!selectedTopic ? "Select a topic" : "Generate Tweet"}
              </button>
            </div>
          )}
          {(isLoading === LoadingState.LoadingTweet ||
            isLoading === LoadingState.TweetReady) &&
            selectedTopic && (
              <div className="flex flex-col grow gap-6 justify-start w-full h-full">
                <motion.div
                  layout
                  layoutId={selectedTopic}
                  className="px-6 py-3 hover:scale-y-105 cursor-pointer ring-1 ring-gray-700 text-white font-medium rounded-xl
                  bg-gray-800 hover:bg-gray-700 backdrop-blur-lg
                  shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {selectedTopic}
                </motion.div>

                <form
                  action=""
                  className="backdrop-blur-lg border border-gray-700 grow shadow-lg hover:shadow-xl 
                  rounded-xl transition-all duration-300 bg-gray-900 flex flex-col gap-2 p-4 w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(
                      `With the context of this topic ${selectedTopic} and I want you to either reconfigure or change the tweet or search the internet for relevant info to help with the tweet based on this inputs: ${inputValue}`,
                      "refine"
                    );
                  }}
                >
                  <label
                    htmlFor="refine-input"
                    className="text-sm font-semibold text-white"
                  >
                    Refine the tweet
                  </label>
                  <textarea
                    id="refine-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="outline-none focus:ring-1 resize-none grow focus:ring-blue-500 bg-gray-800 text-white w-full rounded-lg p-2"
                  />
                  <button
                    type="submit"
                    className={`text-white font-medium 
                      rounded-lg px-2 py-3 flex items-center justify-center gap-2
                      shadow-lg hover:shadow-xl ${
                        selectedTopic
                          ? "bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95 hover:scale-y-105"
                          : "bg-gray-700 text-gray-400 cursor-not-allowed"
                      }  
                      transition-all duration-400`}
                  >
                    Refine
                  </button>
                </form>
              </div>
            )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function GenerateTopicButton({ onSubmitTopic }: { onSubmitTopic: () => void }) {
  return (
    <motion.button
      key="generate"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onSubmitTopic}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium 
        rounded-full px-8 py-4 w-full flex items-center justify-center gap-2
        shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700
        active:scale-95 transition-all duration-300"
    >
      <Sparkles className="h-5 w-5" />
      <span>Generate Tweet Topics</span>
    </motion.button>
  );
}

function GeneratingTopics() {
  return (
    <motion.div
      key="spinner"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex relative items-center justify-center gap-3 px-3 text-gray-300 py-4 w-full bg-gray-800 rounded-xl border border-gray-700 shadow-sm"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <Loader2 className="h-5 w-5 text-blue-400" />
      </motion.div>
      <span className="font-medium">Crafting your perfect topics...</span>
    </motion.div>
  );
}

function TopicList({
  topics,
  setSelectedTopic,
  selectedTopic,
}: {
  selectedTopic: string | null;
  topics: string[];
  setSelectedTopic: (topic: string) => void;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.5 },
        },
        exit: { opacity: 0 },
      }}
      className="flex flex-col grow gap-6"
    >
      {topics.map((topic) => (
        <motion.button
          layout
          layoutId={topic}
          key={topic}
          onClick={() => {
            if (selectedTopic === topic) setSelectedTopic("");
            else setSelectedTopic(topic);
          }}
          variants={{
            hidden: { opacity: 0, x: 250 },
            visible: { opacity: 1, x: 0 },
            exit: { opacity: 0 },
          }}
          transition={{ duration: 0.5, ease: "linear" }}
          className={`px-6 py-3 grow cursor-pointer text-white font-medium rounded-xl
            border border-gray-700 backdrop-blur-lg shadow-md hover:shadow-xl transition-all duration-300 ${
              selectedTopic === topic
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
        >
          <div className="flex items-center gap-2">
            {topic}
            <div className="grow"></div>
            {selectedTopic === topic && (
              <Check className="stroke-1 stroke-white" />
            )}
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}
