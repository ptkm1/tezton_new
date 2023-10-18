import { useParams } from "react-router-dom";
import { Calendar } from "../design/components/calendar";
import { TabsDeliveries } from "../design/components/tabs-deliveries";
import { AppTemplate } from "../design/templates/app.template";

export const CompanyScreen = () => {
  const { company_id } = useParams();

  console.log(company_id);

  return (
    <AppTemplate>
      <div className="w-full grid grid-cols-[80%,20%] grid-rows-none gap-4 p-4 justify-between">
        <Calendar />
        <div className="w-full border border-default bg-foreground rounded-sm p-2">
          <TabsDeliveries />
        </div>
      </div>
    </AppTemplate>
  );
};
