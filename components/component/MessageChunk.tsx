import { memo, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

function MessageChunk({ tweets }: { tweets: string }) {
  const [text, setText] = useState(tweets);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
    }
  }, [text]);

  return (
    <>
      <motion.textarea
        layout
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="w-full p-2 rounded-md resize-none outline-none focus:outline-none overflow-hidden"
      />
    </>
  );
}

export default memo(MessageChunk);
