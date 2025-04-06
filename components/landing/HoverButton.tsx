"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

function HoverButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const router = useRouter();

  useEffect(() => {
    function handleMouseEnter(e: MouseEvent) {
      if (!spanRef.current || !buttonRef.current) return;

      const { width } = buttonRef.current.getBoundingClientRect();
      const offset = e.offsetX;

      spanRef.current.style.visibility = "visible";
      spanRef.current.style.opacity = "1";

      spanRef.current.animate(
        {
          left: `${(offset / width) * 100}%`,
          visibility: "visible",
          opacity: 1,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }

    function handleMouseLeave() {
      if (!spanRef.current) return;

      spanRef.current.animate(
        {
          left: "50%",
          opacity: 0,
          visibility: "hidden",
        },
        {
          duration: 500,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }

    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mousemove", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (button) {
        button.removeEventListener("mousemove", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <Link href={"/dashboard"}>
      <button
        ref={buttonRef}
        className="px-10 overflow-hidden relative py-5 bg-black text-white font-medium rounded-full shadow-lg hover:shadow-2xl transition active:scale-95 cursor-pointer"
      >
        <span className="flex items-center gap-2 mix-blend-difference pointer-events-none">
          Get Started For Free
          <ArrowRight />
        </span>
        <span
          ref={spanRef}
          className="absolute pointer-events-none mix-blend-difference bg-white size-32 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible transition-opacity duration-300"
        ></span>
      </button>
    </Link>
  );
}

export default HoverButton;
