import { LucideIcon } from "lucide-react";
import Image from "next/image";

function StepCard({
  step,
  index,
}: {
  index: number;
  step: {
    title: string;
    description: string;
    icon: LucideIcon;
    bgColor: string;
  };
}) {
  return (
    <div
      className={`h-[100dvh] min-w-[75dvw] max-w-[75dvw]  aspect-video top-0 sticky card-step-${index} bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl shadow-2xl border border-gray-800 text-white flex flex-col items-start`}
    >
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center shadow-lg">
        <span className="text-xl font-bold text-white">{index + 1}</span>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div
          className="p-4 rounded-xl shadow-lg"
          style={{ backgroundColor: step.bgColor }}
        >
          <step.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-white">{step.title}</h3>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mb-8 ">
        {step.description}
      </p>

      <div className="w-full flex-grow rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative">
        <Image
          src={`https://picsum.photos/800/500?random=${index}`}
          alt={`Step ${index + 1}`}
          width={800}
          height={500}
          className="object-cover w-full h-full rounded-xl transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default StepCard;
