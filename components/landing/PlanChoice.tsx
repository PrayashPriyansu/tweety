import { useState } from "react";

const plans = [
  {
    name: "Basic",
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    yearlyPrice: 190,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center py-10 bg-black mt-[25dvh] text-white">
      <h2 className="text-3xl font-semibold mb-6">Choose Your Plan</h2>

      <div className="flex items-center space-x-3 mb-6">
        <span
          className={`cursor-pointer ${
            !isYearly ? "text-white font-medium" : "text-gray-400"
          }`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </span>
        <div
          className="w-12 h-6 bg-gray-700 rounded-full flex items-center p-1 cursor-pointer"
          onClick={() => setIsYearly(!isYearly)}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
              isYearly ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </div>
        <span
          className={`cursor-pointer ${
            isYearly ? "text-white font-medium" : "text-gray-400"
          }`}
          onClick={() => setIsYearly(true)}
        >
          Yearly (-20%)
        </span>
      </div>

      <div className="grid w-full grid-cols-1 grow md:grid-cols-2  gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-gray-800 p-6 hover:ring-1 ring-purple-400 transition-all duration-500 relative rounded-xl w-full flex text-center  shadow-lg border border-gray-700"
          >
            <div className="w-2/3 border-r ">
              {plan.name === "Pro" ? (
                <div className="absolute -top-3 right-3">
                  <span className="bg-yellow-500 text-black text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                    RECOMMENDED
                  </span>
                </div>
              ) : null}
              <h3 className="text-2xl font-medium w-full text-left">
                {plan.name}
              </h3>
              <div className="w-full flex flex-col justify-between items-center">
                <p className="text-4xl font-bold p-4 bg-gray-700 w-fit shadow-2xl rounded-4xl flex items-center justify-center gap-4">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-lg font-normal">
                    {isYearly ? "/ year" : "/ month"}
                  </span>
                </p>
              </div>
            </div>
            <button className="w-1/3 m-4 hover:cursor-pointer hover:-translate-1 hover:shadow-2xl  bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
