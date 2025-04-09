import Sidebar from "../_components/ui/Sidebar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <div className="flex max-h-screen overflow-clip">
      <Sidebar />
      <main className="bg-gray-950 flex grow m-4 overflow-clip overflow-y-auto rounded-lg   shadow-lg shadow-gray-900">
        {children}
      </main>
    </div>
  );
}
export default layout;
