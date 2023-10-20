import { Dialog } from "../design/components/dialog";
import { DeleteCompany } from "../design/components/forms/delete-company";
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
      <Dialog
        title={"Deletar Empresa"}
        description={"Tem certeza que quer deletar essa empresa?"}
        Trigger={<button>Deletar</button>}
        Content={DeleteCompany}
      />
    </div>
  );
};
