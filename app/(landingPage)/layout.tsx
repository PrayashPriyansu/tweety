import Header from "@/app/_components/ui/Header";
import { ReactElement } from "react";

function layout({ children }: { children: ReactElement | ReactElement[] }) {
  return (
    <div className="col-span-2">
      <Header />
      {children}
    </div>
  );
}
export default layout;
