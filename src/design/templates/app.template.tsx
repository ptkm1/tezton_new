import { HomeIcon, PlusCircleIcon, Settings, User2Icon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { MOCK_USER } from "../../mocks/user";
import { Dialog } from "../components/dialog";
import { SubMenu } from "../components/sub-menu";

export const AppTemplate = ({ children }: React.PropsWithChildren) => {
  // const [selectedCompany, setSelectedCompany] = useState<any>(null)

  const selectedCompany = useParams();
  console.log(selectedCompany);

  MOCK_USER.companies.find(
    (company) => company.company_id === selectedCompany?.company_id
  );

  return (
    <div
      className="w-screen h-screen bg-[#1c1c1c] flex"
      style={{ height: "calc(0px + 100vh)", maxHeight: "calc(0px + 100vh)" }}
    >
      {/* MENU lateral esquerdo */}
      <div className="w-14 h-screen border-r border-default flex flex-col">
        <img
          src={
            selectedCompany?.company_logo ||
            "https://t31184413.p.clickup-attachments.com/t31184413/b03451bb-819c-4719-a6fe-0a2f759551ef/isotipo_png.png"
          }
          className="w-14 h-14 min-h-[54px] min-w-[54px] p-3 border-b border-default flex items-center justify-center"
        />
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-3">
          <div className="w-full flex flex-col justify-center items-center gap-2 mt-3">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#2f2f2f] overflow-hidden p-1"
            >
              <HomeIcon size={16} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#2f2f2f] overflow-hidden p-1"
            >
              <PlusCircleIcon size={16} />
            </a>
          </div>
          {MOCK_USER.companies.map((company) => (
            <>
              <Link
                key={company.company_id}
                to={`/company/${company.company_id}`}
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#2f2f2f] overflow-hidden p-1  group"
                // onClick={() => setSelectedCompany(company)}
              >
                <div className="invisible group-hover:visible absolute text-primary mt-[-30px] ml-[-30px]">
                  {/* <ContextMenu /> */}
                  <Dialog
                    Trigger={
                      <Settings
                        fill="rgb(150 162 242)"
                        stroke="#2f2f2f"
                        size={15}
                      />
                    }
                  />
                </div>
                <img src={company.company_logo} alt={company.company_name} />
              </Link>
            </>
          ))}
        </div>
      </div>
      <SubMenu />

      <div className="flex flex-col flex-1 w-full overflow-x-hidden">
        {/* MENU do TOPO */}
        <div className="w-full h-[58px] border-b border-default px-3 flex items-center justify-between">
          <div className="w-full flex justify-start">Left side</div>
          <div className="w-full flex justify-end">
            <User2Icon className="border rounded-full" strokeWidth={1} />
          </div>
        </div>

        {/* CONTEUDO */}
        <div className="flex flex-col flex-1 w-full overflow-x-hidden p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
