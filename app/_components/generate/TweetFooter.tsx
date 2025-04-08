"use client";

import { Heart, MessageCircle, Repeat, Share } from "lucide-react";

function TweetFooter() {
  return (
    <div className="flex justify-items-end justify-between items-center text-stone-400 text-sm mt-2 ">
      <button className="flex items-center gap-1 hover:text-blue-500 transition">
        <MessageCircle className="size-4" />
        <span>12</span>
      </button>

      {/* Retweet */}
      <button className="flex items-center gap-1 hover:text-green-500 transition">
        <Repeat className="size-4" />
        <span>24</span>
      </button>

      {/* Like */}
      <button className="flex items-center gap-1 hover:text-red-500 transition">
        <Heart className="size-4" />
        <span>78</span>
      </button>

      {/* Share */}
      <button className="flex items-center gap-1 hover:text-gray-700 transition">
        <Share className="size-4" />
      </button>
    </div>
  );
}

export default TweetFooter;
