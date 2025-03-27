"use client";

import {
  Home,
  FileText,
  History,
  Settings,
  ChevronsRight,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import MenuItem from "../component/MenuItem";
import UserProfile from "./UserProfile";

const menuItems = [
  { title: "Home", icon: Home, link: "/" },
  {
    title: "Generate",
    icon: Sparkles,
    link: "/generate",
  },

  {
    title: "Context",
    icon: FileText,
    link: "/context",
  },
  {
    title: "History",
    icon: History,
    link: "/history",
  },
  {
    title: "Settings",
    icon: Settings,
    link: "/settings",
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`min-h-screen relative ml-5 py-7 text-black transition-all duration-500 ease-in-out flex flex-col ${
        isOpen ? "w-32" : "w-7"
      }`}
    >
      <UserProfile isOpen={isOpen} />

      {/* Sidebar Toggle Button */}

      {/* Sidebar Content */}
      <div className="mt-20 flex flex-col gap-10 items-center">
        {menuItems.map((item, index) => (
          <MenuItem isOpen={isOpen} key={index} item={item} />
        ))}
      </div>
      <div className="grow"></div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" mt-auto transition-colors duration-200 border-t group border-stone-300"
      >
        <div className="flex items-center gap-4 transition-colors duration-200 rounded-lg  group-hover:bg-stone-200">
          <div className="flex  text-lg place-content-center ">
            <ChevronsRight
              className={`transition-transform duration-200 text-white  sm:text-black ${
                isOpen && "rotate-180"
              } size-8 `}
            />
          </div>
          {isOpen && (
            <motion.span
              layout
              className="font-medium text-black text-md "
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.125 }}
            >
              Hide
            </motion.span>
          )}
        </div>
      </button>
    </div>
  );
}

export default Sidebar;
