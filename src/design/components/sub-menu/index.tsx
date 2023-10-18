import * as Accordion from "@radix-ui/react-accordion";
import { MOCK_USER } from "../../../mocks/user";
import { CompanyProduct, Project } from "../../../types/user_mocks";
import { ContextMenu } from "../dropdown-menu";

export const SubMenu = () => {
  const PRODUCTS: CompanyProduct[] = MOCK_USER.companies
    .map((company) => company.company_products)
    .flat();
  const PROJECTS: Project[] = PRODUCTS.map(
    (product) => product?.projects
  ).flat();

  return (
    <div className="hide-scrollbar flex w-max min-w-[150px] max-w-[255px] flex-col border-r border-default">
      <div className="w-full h-14 border-b-default border-b flex items-center justify-center">
        <span className="text-sm">Submenu</span>
      </div>
      <div className="flex w-full flex-col">
        <Accordion.Root type="multiple">
          {PROJECTS?.map(
            (project) =>
              project && (
                <Accordion.AccordionItem
                  key={project.project_id}
                  value={`project-item-${project.project_id}`}
                >
                  <Accordion.AccordionTrigger className="bg-foreground text-[#fff] border-b border-default w-full h-12 flex items-center justify-between gap-1 p-2 hover:bg-primary">
                    <span className="text-sm w-[90%] flex justify-start gap-2 whitespace-nowrap truncate text-ellipsis overflow-hidden ml-1">
                      {project.project_name}
                    </span>
                    <ContextMenu />
                  </Accordion.AccordionTrigger>
                  <Accordion.AccordionContent>
                    {project.features?.map((feature) => (
                      <Accordion.AccordionItem
                        key={feature.feature_id}
                        value={`feature-item-${feature.feature_id}`}
                      >
                        <Accordion.Trigger className="bg-foreground text-[#fff] border-b border-default h-12 flex items-center justify-between p-2 w-full pl-6 hover:bg-primary">
                          <span className="text-xs w-[90%] flex justify-start whitespace-nowrap truncate text-ellipsis overflow-hidden items-center gap-2">
                            {feature.feature_name}
                          </span>
                          <ContextMenu />
                        </Accordion.Trigger>
                        <Accordion.Content className="flex flex-col pl-1">
                          {feature.deliveries?.map((delivery) => (
                            <Accordion.Item
                              key={delivery.delivery_id}
                              value={`delivery-item-${delivery.delivery_id}`}
                            >
                              <Accordion.Trigger className="bg-foreground text-[#fff] h-7 flex items-center justify-between p-2 w-full pl-5 rounded-sm hover:bg-primary mt-1 mb-1">
                                <span className="text-xs w-full flex justify-start whitespace-nowrap truncate text-ellipsis overflow-hidden">
                                  {delivery.delivery_name}
                                </span>
                                <ContextMenu />
                              </Accordion.Trigger>
                            </Accordion.Item>
                          ))}
                        </Accordion.Content>
                      </Accordion.AccordionItem>
                    ))}
                  </Accordion.AccordionContent>
                </Accordion.AccordionItem>
              )
          )}
        </Accordion.Root>
      </div>
    </div>
  );
};
