import { PropsWithChildren } from "react"

export const AccordionItem = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative mb-3">
      {children}
    </div>
  )
}