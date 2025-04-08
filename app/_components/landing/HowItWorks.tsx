import Image from "next/image";
import PillInfo from "./PillInfo";
import pic from "@/public/pic.jpg";
import Steps from "./Steps";

function HowItWorks() {
  return (
    <section className="w-full bg-black  pt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6 flex items-center justify-center">
          <PillInfo>How It Works</PillInfo>
        </div>
        <h1 className="text-5xl font-bold text-gray-100  leading-tight">
          Simple, Intuitive & Powerful
        </h1>
        <p className="text-lg text-gray-400  mt-4 max-w-2xl mx-auto">
          Our platform is designed for ease of use while delivering powerful AI
          capabilities. Get started in minutes and see results immediately.
        </p>

        <div className="relative mt-10 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
          <Image
            src={pic}
            alt="How It Works"
            layout="responsive"
            width={800}
            height={450}
            className="rounded-2xl"
          />
        </div>
      </div>

      <Steps />
    </section>
  );
}

export default HowItWorks;
