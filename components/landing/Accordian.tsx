import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    title: "How does the AI generate tweets?",
    content:
      "Our AI analyzes recent trends, your brand voice, and custom rules to craft engaging tweets tailored to your style.",
  },
  {
    title: "Can I refine AI-generated tweets?",
    content:
      "Yes! You can tweak AI-generated tweets manually or let the AI refine them based on your preferences before posting.",
  },
  {
    title: "Does it support scheduling?",
    content:
      "Absolutely! You can schedule tweets in advance, and the AI ensures they are posted at optimal engagement times.",
  },
  {
    title: "Can I generate tweets in different languages?",
    content:
      "Yes, the Pro plan supports tweet generation in over 50 languages, making it easy to reach a global audience.",
  },
  {
    title: "Do I need to connect my Twitter account?",
    content:
      "Yes, connecting your Twitter account allows seamless scheduling, auto-posting, and personalized AI-generated content.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-black px-5 md:px-20 w-full pb-[10dvh] space-y-4">
      <div className="flex w-full justify-between items-center animate-fadein-text">
        <h2 className="text-3xl w-full font-bold text-center text-white">
          FAQ
        </h2>
      </div>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`border border-gray-700 rounded-lg overflow-hidden bg-gray-800
            ${index % 2 === 0 ? "animate-card-left" : "animate-card-right"}
            `}
        >
          <button
            className="w-full  flex justify-between items-center p-4 text-white text-lg font-medium hover:bg-gray-700 hover:cursor-pointer transition"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="p-4 bg-gray-950 text-gray-300">{item.content}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
