import { Edit, Sparkles } from "lucide-react";
import Cta from "./Cta";

function GenerateTweetCta() {
  return (
    <Cta path="/generate" icon={Edit}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold ">Generate tweet</h2>
          <Sparkles
            size={14}
            className="text-blue-700 opacity-0 group-hover:opacity-100 duration-400 transition-opacity"
          />
        </div>
        <p className="text-stone-600 text-sm ">Create Engaging Tweet</p>
      </div>
    </Cta>
  );
}
export default GenerateTweetCta;
