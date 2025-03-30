import { BadgeCheck, Bot, PenLine, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: PenLine,
      title: "Express Yourself, Your Way",
      description:
        "Share your thoughts through text, images, and videos—unfiltered and authentic.",
    },
    {
      icon: Bot,
      title: "AI That Elevates Your Tweets",
      description:
        "Refine your writing, correct grammar, and boost engagement with smart AI suggestions.",
    },
    {
      icon: BadgeCheck,
      title: "Stay On-Brand, Effortlessly",
      description:
        "Our AI ensures your tweets align with your brand’s voice, tone, and messaging guidelines.",
    },
    {
      icon: Sparkles,
      title: "Write Smarter, Not Harder",
      description:
        "Generate tweets from articles, complete unfinished drafts, or let AI craft compelling posts for you.",
    },
  ];

  return (
    <section className="py-10 w-full  flex justify-center   dark:bg-gray-900 curvy">
      <div className="w-full">
        <div className="max-w-4xl mx-auto text-center animate-fadein-text">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Why {`You'll`} Love Using Our Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
            More than just tweeting—create, refine, and engage like never
            before.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2  gap-8 max-w-6xl mx-auto px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 bg-red-50/80 dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.05]
                 ${index % 2 == 0 ? "animate-card-left" : "animate-card-right"} 
                 `}
            >
              <div className="flex items-center gap-4">
                <feature.icon className="text-red-800" />
                <h3 className="text-xl font-semibold text-red-950 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
