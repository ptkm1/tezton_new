import { Board } from "../design/components/react-flow/index";
import { TabsDeliveries } from "../design/components/tabs-deliveries";
import { AppTemplate } from "../design/templates/app.template";

export const DeliveryScreen = () => {
  return (
    <AppTemplate>
      <div className="w-full h-full grid grid-cols-[max-content,2fr,max-content] gap-2 grid-rows-1">
        <div className="w-[200px] border border-default h-full rounded-md p-3 flex flex-col items-center justify-start gap-5">
          <span className="w-full text-sm border-b border-default pb-3">
            Evidencias
          </span>
          <img
            src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/25/1220358680-giphy.gif"
            className="rounded-xl overflow-hidden"
          />
        </div>
        <div className="w-full border border-default rounded-md p-1">
          <Board />
        </div>
        <div className="w-[200px] border border-default rounded-md p-1">
          <TabsDeliveries />
        </div>
      </div>
    </AppTemplate>
  );
};
