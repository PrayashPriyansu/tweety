interface PillInfoProps {
  children: React.ReactNode | React.ReactNode[] | string;
}

function PillInfo({ children }: PillInfoProps) {
  return (
    <div className="flex gap-2 items-center rounded-full bg-gray-200 px-4 py-2 text-gray-800">
      <div className="size-2 bg-green-500 animate-pulse rounded-full"></div>
      <span className="text-sm">{children}</span>
    </div>
  );
}
export default PillInfo;
