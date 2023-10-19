import { AppleIcon, ComputerIcon, Smartphone, User2Icon } from "lucide-react";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

export const TopMenu = () => {
  const PLATFORMS = [
    { label: "Web", icon: ComputerIcon },
    { label: "Android", icon: Smartphone },
    { label: "iOS", icon: AppleIcon },
  ];

  const AMBIENTS = [
    { label: "Ideação", value: "Ideação" },
    { label: "Refinamento", value: "Refinamento" },
    { label: "Desenvolvimento", value: "Desenvolvimento" },
    { label: "Homologação", value: "Homologação" },
    { label: "Produção", value: "Produção" },
  ];

  const { company_id } = useParams();
  const [selectedAmbient, setSelectedAmbient] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState("");

  return (
    <div className="w-full h-[58px] bg-[#F8F9FF] dark:bg-[#1c1c1c] border-b border-default dark:border-defaultdark px-3 flex items-center justify-between">
      <div className="w-full flex justify-start items-center gap-2">
        {company_id && (
          <Fragment>
            <span className="text-xs">Dispositivos:</span>
            {PLATFORMS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setSelectedPlatforms(label)}
                className={`w-max h-max p-2 border border-default dark:border-defaultdark rounded-md hover:bg-primary ${
                  selectedPlatforms === label && "bg-primary"
                }`}
              >
                <Icon size={14} />
              </button>
            ))}
            <div className="w-full flex gap-1 ml-8">
              {AMBIENTS.map(({ label }) => (
                <button
                  key={label}
                  onClick={() => setSelectedAmbient(label)}
                  className={`w-max h-max p-2 text-xs rounded-md hover:bg-primary ${
                    selectedAmbient === label && "bg-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="w-full flex gap-2">
              {["Voltar", "Promover"].map((label) => (
                <button
                  onClick={() => {}}
                  key={label}
                  className={`w-max h-max p-2 text-sm border border-default dark:border-defaultdark rounded-md hover:bg-primary`}
                >
                  {label}
                </button>
              ))}
            </div>
          </Fragment>
        )}
      </div>

      <div className="w-full flex justify-end">
        <User2Icon className="border rounded-full" strokeWidth={1} />
      </div>
    </div>
  );
};
