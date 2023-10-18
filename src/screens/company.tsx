import { useParams } from "react-router-dom"
import { Calendar } from "../design/components/calendar"
import { AppTemplate } from "../design/templates/app.template"
import { TabsDeliveries } from "../design/components/tabs-deliveries"

export const CompanyScreen = () => {

  const { company_id } = useParams()

  return (
    <AppTemplate>
      <div className="w-full grid grid-cols-[80%,20%] grid-rows-none gap-4 p-4 justify-between">
        <Calendar />
        <div className="w-full border border-default bg-foreground rounded-sm p-2">
          <TabsDeliveries />
        </div>
      </div>
    </AppTemplate>
  )
}