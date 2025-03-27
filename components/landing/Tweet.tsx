import { motion } from "motion/react";
import { MessageCircle, Heart, Repeat } from "lucide-react";

function Tweet({
  tweet,
  className,
}: {
  tweet: {
    avatar: string;
    user: string;
    username: string;
    time: string;
    text: string;
  };
  className: string;
}) {
  return (
    <motion.div
      className={`bg-slate-900 dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 hover:shadow-lg flex flex-col transition-all duration-300 aspect-video ${className}  `}
      whileHover={{ scale: 1.02 }}
    >
      {/* User Info */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={tweet.avatar}
          alt={tweet.user}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-white font-semibold">{tweet.user}</p>
          <p className="text-gray-400 text-sm">
            {tweet.username} • {tweet.time}
          </p>
        </div>
      </div>

      {/* Tweet Content */}
      <p className="text-gray-200 mb-3">{tweet.text}</p>

      <div className="grow"></div>
      {/* Tweet Actions */}
      <div className="flex justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <MessageCircle /> 12
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
          <Repeat /> 8
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-red-400">
          <Heart /> 36
        </div>
      </div>
    </motion.div>
  );
}

export default Tweet;
