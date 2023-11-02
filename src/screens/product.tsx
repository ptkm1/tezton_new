// import { Calendar } from "lucide-react";
import { useContext } from "react";
import { GlobalContext } from "../contexts/global-context";
import { TabsDeliveries } from "../design/components/tabs-deliveries";
import { AppTemplate } from "../design/templates/app.template";

export const ProductScreen = () => {
  // const { company_id } = useParams();
  const { selectedFeature } = useContext(GlobalContext);

  // const teste = [{ id: 1, nome: "fulano", icon: Calendar }];

  return (
    <AppTemplate>
      <div className="w-full grid grid-cols-[80%,20%] grid-rows-none gap-4 p-4 justify-between">
        {selectedFeature ? (
          <div className="w-full h-full">
            {/* {teste.map(({ nome, icon: Icon }) => (
              <div>
                <Icon />
                <span>{nome}</span>
              </div>
            ))} */}
            <div className="w-full flex items-center justify-center border-default dark:border-defaultdark dark:bg-darkForeground bg-foreground rounded-md p-2">
            Selecione algum projeto
          </div>
          </div>
        ) : (
          <div className="w-full flex items-center justify-center border-default dark:border-defaultdark dark:bg-darkForeground bg-foreground rounded-md p-2">
            Selecione alguma funcionalidade
          </div>
        )}
        <div className="w-full border border-default dark:border-defaultdark dark:bg-darkForeground bg-foreground rounded-sm p-2">
          <TabsDeliveries />
        </div>
      </div>
    </AppTemplate>
  );
};
