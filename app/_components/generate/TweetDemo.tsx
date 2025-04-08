import { ReactElement } from "react";
import TweetHeader from "./TweetHeader";
import TweetFooter from "./TweetFooter";
import Image from "next/image";

interface TweetDemoProps {
  children: ReactElement[] | ReactElement | string;
}

function TweetDemo({ children }: TweetDemoProps) {
  return (
    <div className="relative rounded-lg shadow-xl col-start-1 col-span-1 grid grid-cols-[min-content_1fr] p-4 gap-3 bg-gradient-to-br  from-stone-900 to-stone-800 flex-col border-2 border-stone-800 w-full ">
      <div className="relative size-10">
        <Image
          src="/pp.jpg"
          alt="profile-pic"
          fill
          className="rounded-full object-cover object-center "
        />
      </div>
      <div className="flex flex-col">
        <div>
          <TweetHeader />
          {children}
        </div>
        <div className="grow"></div>
        <TweetFooter />
      </div>
    </div>
  );
}
export default TweetDemo;
