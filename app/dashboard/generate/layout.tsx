import Sidebar from "@/components/page/Sidebar";
import { ReactElement } from "react";

function layout({ children }: { children: ReactElement | ReactElement[] }) {
  return (
    <main className="bg-white/50 flex grow m-4 w-full h-full  rounded-lg  shadow-[oklch(85%_0.01_250_/_50%)] shadow-lg">
      <Sidebar />
      {children}
    </main>
  );
}
export default layout;
