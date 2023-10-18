
interface AccordionHeaderProps {
  customContent?: any
  label?: string
  customHeaderColor?: string
  customHeaderBGColor?: string
  collapseTarget: string
}

export const AccordionHeader = ({ collapseTarget, customContent, label, customHeaderColor, customHeaderBGColor }: AccordionHeaderProps) => {
  return (
    <h6 className="mb-0">
      <button
        className={`border-default text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid text-left font-semibold text-dark-500 transition-all ease-in ${customHeaderBGColor} ${customHeaderColor} `}
        data-collapse-target={collapseTarget}
      >
        {customContent || <span>{label}</span>}
      </button>
    </h6>
  )
}