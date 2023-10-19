import { HomeIcon, PlusCircleIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { MOCK_USER } from "../../mocks/user";
import { Dialog } from "../components/dialog";
import { EditNameCompany } from "../components/forms/edit-company";
import { SubMenu } from "../components/sub-menu";
import { TopMenu } from "../components/top-menu";

export const AppTemplate = ({ children }: React.PropsWithChildren) => {
  // const [selectedCompany, setSelectedCompany] = useState<any>(null)

  const selectedCompany = useParams();
  const findSpecificCompany = MOCK_USER.companies.find(
    (company) => company.company_id === selectedCompany?.company_id
  );

  console.log(findSpecificCompany);
  return (
    <div
      className="w-screen h-screen bg-[#1c1c1c] flex"
      style={{ height: "calc(0px + 100vh)", maxHeight: "calc(0px + 100vh)" }}
    >
      {/* MENU lateral esquerdo */}
      <div className="w-14 h-screen border-r border-default flex flex-col">
        <img
          src={
            findSpecificCompany?.company_logo ||
            "https://t31184413.p.clickup-attachments.com/t31184413/b03451bb-819c-4719-a6fe-0a2f759551ef/isotipo_png.png"
          }
          className="w-14 h-[58px] min-h-[54px] min-w-[54px] p-3 border-b border-default flex items-center justify-center"
        />
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-3">
          <div className="w-full flex flex-col justify-center items-center gap-2 mt-3">
            <Link
              to="/"
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#2f2f2f] overflow-hidden p-1"
            >
              <HomeIcon size={16} />
            </Link>
            <Dialog
              Trigger={
                <button className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#2f2f2f] overflow-hidden p-1">
                  <PlusCircleIcon size={16} />
                </button>
              }
              Content={EditNameCompany}
            />
          </div>
          {findSpecificCompany?.company_products.map((product) => (
            <Link
              key={product.product_id}
              to={`product/${product.product_id}`}
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#2f2f2f] overflow-hidden p-1 group"
            >
              <div className="invisible group-hover:visible absolute text-primary mt-[-30px] ml-[-30px]"></div>
              <img src={product.product_logo} alt={product.product_name} />
            </Link>
          )) ||
            MOCK_USER.companies.map((company) => (
              <Link
                key={company.company_id}
                to={`/company/${company.company_id}`}
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#2f2f2f] overflow-hidden p-1 group"
              >
                <div className="invisible group-hover:visible absolute text-primary mt-[-30px] ml-[-30px]">
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
