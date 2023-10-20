import { Dialog } from "../design/components/dialog";
import { EditNameCompany } from "../design/components/forms/edit-company";
import { EditLogoCompany } from "../design/components/forms/edit-logo-company";

export const TestScreen = () => {
  return (
    <div className="flex gap-2 ">
      <Dialog
        title={"Editar"}
        description={"Nome da empresa"}
        Trigger={<button>Editar Nome</button>}
        Content={EditNameCompany}
      />
      <Dialog
        title={"Editar"}
        description={"Logo da empresa (Cole uma URL)*"}
        Trigger={<button>Editar Logo</button>}
        Content={EditLogoCompany}
      />
    </div>
  );
};
