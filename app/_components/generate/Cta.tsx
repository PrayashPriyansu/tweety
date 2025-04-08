import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

interface CtaProps {
  children: ReactElement[] | ReactElement | string;
  icon: LucideIcon;
  path: string;
}

function Cta({ path, children, icon: Icon }: CtaProps) {
  return (
    <Link
      href={path}
      className="glass flex items-center gap-4 px-4 py-3 rounded-xl grow hover:shadow-lg border transition-all duration-400 group transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden"
    >
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-500/20 group-hover:from-blue-500/30 to-white/60 transition-opacity duration-500" />
      <div className="rounded-full p-2 items-center justify-center bg-blue-600 text-white">
        <Icon className="stroke-1 group-hover:rotate-12 group-hover:scale-105 transition-transform duration-400 size-6 " />
      </div>
      {children}
    </Link>
  );
}
export default Cta;
