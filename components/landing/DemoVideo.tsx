"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function DemoVideo() {
  return (
    <div className="h-[240vh] relative mt-[-100vh] -z-10">
      <div className="w-full h-screen sticky top-0 animate-fadein-video animate-fadeout grow flex items-center justify-center">
        <video
          width="90%"
          height="90%"
          loop
          autoPlay
          muted
          className="rounded-xl border-1 border-gray-300 shadow-lg hover:shadow-2xl transition duration-300   "
        >
          <source src="/video/Demo.mp4" type="video/mp4" />
          {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
        />
        Your browser does not support the video tag. */}
        </video>
      </div>
    </div>
  );
}
export default DemoVideo;
