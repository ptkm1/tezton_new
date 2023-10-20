import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Edit,
  EditIcon,
  HomeIcon,
  MoonIcon,
  Plus,
  PlusCircleIcon,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { MOCK_USER } from "../../mocks/user";
import { Dialog } from "../components/dialog";
import { EditNameCompany } from "../components/forms/edit-company";
import { SubMenu } from "../components/sub-menu";
import { TopMenu } from "../components/top-menu";

export const AppTemplate = ({ children }: React.PropsWithChildren) => {
  const selectedCompany = useParams();
  const findSpecificCompany = MOCK_USER.companies.find(
    (company) => company.company_id === selectedCompany?.company_id
  );

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    console.log(document.documentElement.classList.value);
    localStorage.setItem(
      "@teztonTheme",
      document.documentElement.classList.value
    );
  }

  return (
    <div
      className="w-screen h-screen bg-[#fff] dark:bg-[#1c1c1c] flex"
      style={{ height: "calc(0px + 100vh)", maxHeight: "calc(0px + 100vh)" }}
    >
      {/* MENU lateral esquerdo */}
      <div className="w-14 h-screen border-r bg-[#F8F9FF] dark:bg-[#1c1c1c] border-default dark:border-defaultdark flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <img
            src={
              findSpecificCompany?.company_logo ||
              "https://t31184413.p.clickup-attachments.com/t31184413/b03451bb-819c-4719-a6fe-0a2f759551ef/isotipo_png.png"
            }
            className="w-14 h-[58px] min-h-[54px] min-w-[54px] p-3 border-b border-default dark:border-defaultdark flex items-center justify-center"
          />
          <div className="w-full flex flex-col justify-center items-center gap-2 mt-3">
            <div className="w-full flex flex-col justify-center items-center gap-2 mt-3">
              <Link
                to="/"
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#e6e8eb] dark:hover:bg-[#2f2f2f] dark:text-[gray] overflow-hidden p-1"
              >
                <HomeIcon size={16} />
              </Link>
              <Dialog
                Trigger={
                  <button className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#e6e8eb] dark:hover:bg-[#2f2f2f] dark:text-[gray] overflow-hidden p-1">
                    <PlusCircleIcon size={16} />
                  </button>
                }
                Content={EditNameCompany}
              />
            </div>
            {findSpecificCompany?.company_products.map((product) => (
              <Link
                key={product.product_id}
                to={
                  selectedCompany.product_id
                    ? ""
                    : `product/${product.product_id}`
                }
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#e6e8eb] dark:hover:bg-[#2f2f2f] dark:text-[gray] overflow-hidden p-1 group"
              >
                <div className="invisible group-hover:visible absolute text-primary mt-[-30px] ml-[-30px]"></div>
                <img src={product.product_logo} alt={product.product_name} />
              </Link>
            )) ||
              MOCK_USER.companies.map((company) => (
                <Link
                  key={company.company_id}
                  to={`company/${company.company_id}`}
                  className="group flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#e6e8eb] dark:hover:bg-[#2f2f2f] dark:text-[gray] overflow-hidden p-1 group"
                >
                  <div className="invisible group-hover:visible absolute text-primary mt-[-30px] ml-[-30px]">
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger>
                        <EditIcon />
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content className="bg-foreground flex flex-col w-max max-w-[250px] gap-2 border border-default dark:border-defaultdark rounded-md overflow-hidden shadow-md drop-shadow-lg">
                        <DropdownMenu.Item className="w-full h-7 flex justify-between items-center gap-2 hover:bg-primary px-2 py-3">
                          <Plus size={20} />
                          <span className="flex justify-start w-full text-xs">
                            test
                          </span>
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Root>
                    {/* <Dialog
                  title={`Editar ${company.company_name}`}
                  description={`Edite a ${company.company_name}`}
                  Trigger={
                    <Settings
                    fill="rgb(150 162 242)"
                    stroke="#2f2f2f"
                    size={15}
                    />
                  }
                  Content={EditNameCompany}
                /> */}
                  </div>
                  {/* <ContextMenu /> */}
                  <img src={company.company_logo} alt={company.company_name} />
                </Link>
              ))}
          </div>
        </div>
        <div className="w-full mb-4 flex items-center justify-center">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#e6e8eb] dark:hover:bg-[#2f2f2f] dark:text-[gray] overflow-hidden p-1"
          >
            <MoonIcon />
          </button>
        </div>
      </div>
      {!!selectedCompany?.company_id && <SubMenu />}
      <div className="flex flex-col flex-1 w-full overflow-x-hidden">
        {/* MENU do TOPO */}
        <TopMenu />
        {/* CONTEUDO */}
        <div className="flex flex-col flex-1 w-full overflow-x-hidden p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
