import { Dot, Ellipsis } from "lucide-react";

const userName = "John Doe";

function TweetHeader() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center grow gap-2">
        <h1 className="text-xl text-white">{userName}</h1>
        <h2 className="text-sm text-stone-400 font-semibold">@{userName}</h2>
        <Dot size={12} className="text-white" />
        <h2 className="text-sm text-stone-400">17hrs</h2>
        <div className="grow "></div>
        <Ellipsis size={16} className="text-stone-400 stroke-3" />
      </div>
    </div>
  );
}
export default TweetHeader;
