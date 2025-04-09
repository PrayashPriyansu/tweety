import { ReactElement } from "react";

function ChatContainer({
  children,
}: {
  children: ReactElement[] | ReactElement | string | null;
}) {
  return (
    <div className="relative rounded-lg shadow-xl col-start-2 col-span-1 p-4 gap-3 flex flex-col border-2 border-gray-700 bg-gray-900">
      {children}
    </div>
  );
}
export default ChatContainer;
