import { HomeIcon, Link, PlusCircleIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import { MOCK_USER } from "../../../mocks/user";

export const LeftMenu = () => {
  const selectedCompany = useParams();
  const findSpecificCompany = MOCK_USER.companies.find(
    (company) => company.company_id === selectedCompany?.company_id
  );

  return (
    <div className="w-14 h-screen border-r border-default flex flex-col">
      <img
        src={
          findSpecificCompany?.company_logo ||
          "https://t31184413.p.clickup-attachments.com/t31184413/b03451bb-819c-4719-a6fe-0a2f759551ef/isotipo_png.png"
        }
        className="w-14 h-14 min-h-[54px] min-w-[54px] p-3 border-b border-default flex items-center justify-center"
      />
      <div className="w-full flex flex-col justify-center items-center gap-2 mt-3">
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-3">
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#2f2f2f] overflow-hidden p-1"
          >
            <HomeIcon size={16} />
          </Link>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#2f2f2f] overflow-hidden p-1"
          >
            <PlusCircleIcon size={16} />
          </a>
        </div>
        {MOCK_USER.companies.map((company) => (
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
            {/* <img src={company.company_logo} alt={company.company_name} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};
