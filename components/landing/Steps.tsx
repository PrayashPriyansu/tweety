import { CheckCircle, FileText, Lightbulb, PenTool, User } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";
import StepCard from "./StepCard";

const steps = [
  {
    title: "Sign Up & Connect",
    description:
      "Create an account and securely connect your Twitter with a single click. No complex setup required.",
    icon: User,
    bgColor: "#4A90E2",
  },
  {
    title: "Define Your Brand",
    description:
      "Set your tone of voice, define content preferences, and let AI learn your unique Twitter style.",
    icon: FileText,
    bgColor: "#F5A623",
  },
  {
    title: "Generate & Refine",
    description:
      "AI drafts tweets based on your settings. Edit, tweak, or let the AI refine them to perfection.",
    icon: PenTool,
    bgColor: "#7ED321",
  },
  {
    title: "Schedule & Post",
    description:
      "Schedule tweets for the best engagement times or let AI auto-post for consistent activity.",
    icon: CheckCircle,
    bgColor: "#D0021B",
  },
];

function Steps() {
  return (
    <div className="relative flex step-conatiner   flex-col gap-40 my-[25dvh] items-center">
      {steps.map((step, index) => (
        <StepCard key={index} step={step} index={index} />
      ))}
    </div>
  );
}

export default Steps;
