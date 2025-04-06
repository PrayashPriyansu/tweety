import Sidebar from "@/components/page/Sidebar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-white/50 flex grow m-4   rounded-lg  shadow-[oklch(85%_0.01_250_/_50%)] shadow-lg">
        {children}
      </main>
    </div>
  );
}
export default layout;
