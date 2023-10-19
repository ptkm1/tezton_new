import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../contexts/global-context";
import { Calendar } from "../design/components/calendar";
import { TabsDeliveries } from "../design/components/tabs-deliveries";
import { AppTemplate } from "../design/templates/app.template";

export const CompanyScreen = () => {
  const { company_id } = useParams();
  const { selectedFeature } = useContext(GlobalContext);
  console.log(company_id);

  return (
    <AppTemplate>
      <div className="w-full grid grid-cols-[80%,20%] grid-rows-none gap-4 p-4 justify-between">
        {selectedFeature ? (
          <div className="w-full h-full">
            <Calendar />
          </div>
        ) : (
          <div className="w-full flex items-center justify-center border-default bg-foreground rounded-md p-2">
            Selecione alguma funcionalidade
          </div>
        )}
        <div className="w-full border border-default bg-foreground rounded-sm p-2">
          <TabsDeliveries />
        </div>
      </div>
    </AppTemplate>
  );
};
