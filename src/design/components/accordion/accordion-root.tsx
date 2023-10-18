import { PropsWithChildren } from "react"

export const AccordionRoot = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full">
      {children}
    </div>
  )
}