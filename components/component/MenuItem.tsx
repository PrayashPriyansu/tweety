import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MenuItemProps {
  item: {
    title: string;
    icon: LucideIcon;
    link: string;
  };
  isOpen: boolean;
}

function MenuItem({ item, isOpen }: MenuItemProps) {
  return (
    <Link
      href={item.link}
      className="flex gap-4 w-full "
      // className={({ isActive }) => `
      //   ${
      //     isActive
      //       ? "bg-violet-50 shadow text-stone-950 font-semibold "
      //       : "hover:bg-stone-200 bg-transparent text-stone-300 sm:text-stone-500 shadow-none"
      //   }  flex group  items-center active:outline-none justify-start w-full text-sm px-2 py-1.5  gap-2 rounded-lg transition-[box-shadow_background-color_color] duration-200`}
    >
      <div className={`${!isOpen && "items-center justify-center flex "}`}>
        <item.icon className="stroke-1 size-6 group-aria-current:text-violet-500 group-aria-current:stroke-[1.7]" />
      </div>
      {isOpen && (
        <motion.span
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.125 }}
        >
          {item.title}
        </motion.span>
      )}
    </Link>
  );
}

export default MenuItem;
