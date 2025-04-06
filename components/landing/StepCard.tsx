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
      className={`max-h-[80dvh]  w-[90dvw]  overflow-clip aspect-video top-[10dvh] sticky card-step-${index} bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-gray-800 text-white flex flex-col items-start`}
    >
      <div className="w-full flex justify-between">
        <div
          className="p-4 rounded-2xl rounded-bl-none rounded-tr-none shadow-lg"
          style={{ backgroundColor: step.bgColor }}
        >
          <step.icon className="w-8 h-8 text-white" />
        </div>
        <div className="p-4 rounded-2xl rounded-br-none rounded-tl-none bg-gray-800 border-2 border-gray-700 flex items-center justify-center shadow-lg ">
          <span className="text-xl font-bold w-8 h-8 text-white">
            {index + 1}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 h-full">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold w-full text-center text-white">
            {step.title}
          </h3>

          <p className="text-lg text-gray-300 leading-relaxed p-4 mb-8 ">
            {step.description}
          </p>
        </div>

        <div className=" h-full w-full aspect-video   overflow-clip shadow-2xl  relative">
          <Image
            src={`https://picsum.photos/800/500?random=${index}`}
            alt={`Step ${index + 1}`}
            fill
            className="object-cover w-full h-full rounded-xl md:rounded-tr-none md:rounded-bl-none rounded-t-none transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 pointer-events-none"></div>
    </div>
  );
}

export default StepCard;
