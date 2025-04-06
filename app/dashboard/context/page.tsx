"use client";

import { useEffect, useRef, useState } from "react";

function ContextPage() {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(
    function () {
      const textarea = ref.current;
      if (!textarea) return;

      textarea.style.height = "auto";

      const textAreaHeight = textarea.scrollHeight;

      textarea.style.height = `${textAreaHeight}px`;
    },
    [value]
  );

  const count = value.length;
  return (
    <div>
      <h1>Context Page</h1>
      <form action="">
        <div className="relative">
          <label htmlFor="context">Enter your brand brief:</label>
          <textarea
            ref={ref}
            id="context"
            value={value}
            maxLength={100}
            onChange={(e) => setValue(e.target.value)}
            name="context"
            className="w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-xl  overflow-y-clip resize-none transition-all duration-200 "
            placeholder="Brand brief"
          />
          <div
            className={`absolute bottom-1 right-1 ${
              count > 500 ? "text-red-400" : "text-green-400"
            }`}
          >
            {count}
          </div>
        </div>
      </form>
    </div>
  );
}
export default ContextPage;
