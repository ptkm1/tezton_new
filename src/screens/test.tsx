import { Dialog } from "../design/components/dialog";
import { EditNameCompany } from "../design/components/forms/edit-company";

export const TestScreen = () => {
  return (
    <div>
      <Dialog
        title={"test"}
        description={"edite test"}
        Trigger={<button>abrir modal</button>}
        Content={EditNameCompany}
      />
    </div>
  );
};
