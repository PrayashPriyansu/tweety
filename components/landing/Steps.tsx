import { CheckCircle, Lightbulb, PenTool } from "lucide-react";
import { Fragment } from "react";

const steps = [
  {
    title: "Create a Topic",
    description:
      "Start with a compelling topic that captures your audience's interest and adds value.",
    icon: Lightbulb,
    bgColor: "bg-red-500",
  },
  {
    title: "Refine & Structure",
    description:
      "Organize your thoughts, outline key points, and ensure clarity in your content.",
    icon: PenTool,
    bgColor: "bg-blue-500",
  },
  {
    title: "Publish & Engage",
    description:
      "Share your content with the world and actively engage with your audience.",
    icon: CheckCircle,
    bgColor: "bg-green-500",
  },
];

function Steps() {
  return (
    <div className="relative mt-10">
      <div className="grid grid-cols-2  items-start ">
        {/* Step Sections */}
        {steps.map((step, index) => (
          <Fragment key={index}>
            {/* Sticky Sidebar */}
            <div
              key={index}
              className={`sticky top-0 h-screen w-full shadow-2xl  ${step.bgColor} flex flex-col items-center justify-center   shadow-lg`}
            >
              <step.icon className="w-12 h-12 text-white mb-4" />
              <h2 className="text-3xl font-bold text-white">{step.title}</h2>
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-gray-800  h-screen  shadow-md flex items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Steps;
