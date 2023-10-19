import { PropsWithChildren } from "react";

interface AccordionContentProps {
  children: PropsWithChildren | any;
  collapseTarget: string;
  customContent?: any;
}

export const AccordionContent = ({
  children,
  collapseTarget,
}: AccordionContentProps) => {
  return (
    <div
      data-collapse={collapseTarget}
      className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div className="p-4 h-max border border-default dark:border-defaultdark text-sm leading-normal text-blue-gray-500/80">
        {children}
      </div>
    </div>
  );
};
