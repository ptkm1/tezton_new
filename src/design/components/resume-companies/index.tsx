import { MOCK_USER, extractFeatureStatus } from "../../../mocks/user";
// import { Accordion } from "../accordion";
import * as Accordion from "@radix-ui/react-accordion";
import * as Progress from "@radix-ui/react-progress";
import { useState } from "react";
import { ResumeCompaniesHeader } from "./resume-companies.header";

export const ResumeCompanies = ({ onSelectStatus }: any) => {
  const COMPANIES = MOCK_USER.companies;

  const productsStatus: any = extractFeatureStatus(MOCK_USER);
  const [progress, setProgress] = useState(13);

  return (
    <div className="w-full">
      <Accordion.Root type="multiple">
        {COMPANIES.map((company, idx) => (
          <Accordion.Item
            key={company.company_id}
            value={company.company_id + idx}
          >
            <Accordion.Trigger className="w-full">
              <ResumeCompaniesHeader
                company_name={company.company_name}
                company_logo={company.company_logo}
                products={company.company_products}
                idx={idx}
              />
            </Accordion.Trigger>

            <Accordion.Content className="p-4 h-max border border-default text-sm leading-normal text-blue-gray-500/80">
              {company.company_products.map((product, product_idx) => (
                <div
                  key={product.product_id}
                  className="flex w-full gap-3 mb-4"
                >
                  <div className="flex flex-col justify-center w-[59%] gap-3">
                    <div className="flex items-center gap-3 ">
                      <img
                        className="bg-primary rounded-md"
                        src={product.product_logo}
                        alt={product.product_name}
                        width={40}
                      />
                      <span className="text-sm">{product.product_name}</span>
                    </div>
                    <Progress.Root className="w-full border border-default rounded-md h-2 overflow-hidden">
                      <Progress.Indicator
                        style={{ transform: `translateX(-${100 - progress}%)` }}
                        className="w-full h-full bg-primary transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                      />
                    </Progress.Root>
                    {/* <div className="w-full border border-default rounded-md h-2 overflow-hidden">
                      <div className="w-[50%] h-full bg-primary" />
                    </div> */}
                  </div>
                  <div className="w-[40%] flex items-center justify-between">
                    {productsStatus[product?.product_name]
                      ?.map((feature: { status: any[] }) =>
                        feature.status.map((statu: any) => statu)
                      )
                      [product_idx]?.map(
                        (statusName: {
                          status_name: string;
                          value: number;
                        }) => (
                          <div
                            key={statusName.status_name}
                            onClick={() =>
                              onSelectStatus({ ...statusName, ...product })
                            }
                            className="w-full flex items-center justify-center border"
                          >
                            {statusName.value}
                          </div>
                        )
                      )}
                  </div>

                  {/* REFATORAR ISTO,devemos mostrar um status em cada produto, mas no xd pede para mostrar
                    o status de cada delivery */}

                  {/* <div className="w-[40%] flex items-center justify-between">
                    {product?.projects[product_idx]?.features?.map((feature) =>
                      feature?.deliveries?.map((delivery) =>
                        delivery?.status?.map((status) => (
                          <div
                            key={status.status_name}
                            onClick={() =>
                              onSelectStatus({ ...status, ...product })
                            }
                            className="w-full flex items-center justify-center border"
                          >
                            {status.value}
                          </div>
                        ))
                      )
                    )}
                  </div> */}
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};
