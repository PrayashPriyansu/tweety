import PlanChoice from "./PlanChoice";

const features = [
  { name: "Daily Tweet Generations", basic: "5", pro: "Unlimited" },
  { name: "AI Refinement per Tweet", basic: "2", pro: "10" },
  { name: "Brand Brief Length (Words)", basic: "100", pro: "500" },
  { name: "Custom Style Rules", basic: "10", pro: "Unlimited" },
  { name: "Tweets Based on Recent Trends & News", basic: false, pro: true },
  { name: "AI-Powered Hashtag Suggestions", basic: false, pro: true },
  { name: "Tweet Scheduling & Auto-Posting", basic: false, pro: true },
  {
    name: "Multilingual Tweet Generation",
    basic: "English Only",
    pro: "50+ Languages",
  },
  { name: "AI Sentiment Control", basic: "Limited", pro: "Full Control" },
  {
    name: "AI-Powered Analytics",
    basic: "Basic",
    pro: "Advanced ",
  },
  {
    name: "Priority Support",
    basic: "Email Only",
    pro: "24/7 Priority Support",
  },
];

export default function PricingSection() {
  return (
    <div className="w-full p-6 bg-black text-white  shadow-lg">
      <div className=" w-full animate-fadein-text ">
        <h2 className="text-3xl font-bold text-center mb-6">Plans</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-800 ">
          <table className="w-full border-collapse ">
            <thead>
              <tr className="bg-gray-950 text-gray-300 ">
                <th className="p-4 text-left">Features</th>
                <th className="p-4 text-center">Basic</th>
                <th className="p-4 text-center">Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-gray-800 hover:shadow-2xl transition-all duration-500"
                >
                  <td className="p-4 text-left text-gray-300">
                    {feature.name}
                  </td>
                  <td className="p-4 text-center text-gray-400">
                    {typeof feature.basic === "boolean"
                      ? feature.basic
                        ? "✅"
                        : "❌"
                      : feature.basic}
                  </td>
                  <td className="p-4 text-center text-gray-200 font-semibold">
                    {typeof feature.pro === "boolean"
                      ? feature.pro
                        ? "✅"
                        : "❌"
                      : feature.pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PlanChoice />
      </div>
    </div>
  );
}
