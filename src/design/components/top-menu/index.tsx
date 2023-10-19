import { User2Icon } from "lucide-react";

export const TopMenu = () => {
  return (
    <div className="w-full h-[58px] border-b border-default px-3 flex items-center justify-between">
      <div className="w-full flex justify-start">Left side</div>
      <div className="w-full flex justify-end">
        <User2Icon className="border rounded-full" strokeWidth={1} />
      </div>
    </div>
  );
};
