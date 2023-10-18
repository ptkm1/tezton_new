import { AtomIcon, User2Icon } from "lucide-react";
import { useState } from "react";
import { CardResume } from "../design/components/card-resume";
import { ResumeCompanies } from "../design/components/resume-companies";
import { AppTemplate } from "../design/templates/app.template";

export const HomeScreen = () => {
  const [selectedStatus, setSelectedStatus] = useState<any>(null);

  const handleSelectStatus = (idx: string) => {
    setSelectedStatus(idx);
  };

  const COMMENTS = {
    id: 1,
    comments: [
      {
        id: 123,
        comment:
          "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag et dolor in hendrerit in voluptua et accusam et accusam et accusam et accus et   accusam",
        particptions: [
          {
            id: "20193",
            name: "@ekopk",
          },
          {
            id: "213312x",
            name: "@overi",
          },
        ],
      },
      {
        id: 1233123,
        comment: "Comentario 2",
        particptions: [
          {
            id: "20193",
            name: "@Joao",
          },
          {
            id: "213312x",
            name: "@over23i",
          },
        ],
      },
    ],
  };

  return (
    <AppTemplate>
      <div className="w-full grid grid-cols-2 justify-between gap-14">
        <ResumeCompanies onSelectStatus={handleSelectStatus} />
        <div className="w-full">
          {selectedStatus && (
            <div className="flex flex-col gap-3 w-full">
              <span className="text-lg">{selectedStatus?.product_name}</span>
              <div className="flex items-center gap-2">
                <AtomIcon size={18} strokeWidth={1} />
                <span className="text-sm">
                  {selectedStatus?.value} {selectedStatus?.status_name}
                </span>
              </div>
              <div className="w-full flex gap-3 overflow-x-scroll p-4 pl-0">
                {Array.from({ length: 5 }).map(() => (
                  <CardResume />
                ))}
              </div>
              <div className="w-full flex flex-col border gap-3 border-default p-4">
                {COMMENTS.comments.map((comment) => (
                  <div className="w-full flex flex-col">
                    <div
                      key={comment.id}
                      className="w-full flex items-center gap-2 border border-default p-4 rounded-t-lg"
                    >
                      <div className="w-7 h-7 min-h-[28px] min-w-[28px] border flex items-center justify-center rounded-full">
                        <User2Icon size={16} />
                      </div>
                      <span className="text-sm">{comment.comment}</span>
                    </div>
                    <div className="w-full h-7 p-4 bg-primary rounded-b-lg flex items-center justify-between">
                      <span className="flex gap-3 text-xs">
                        Apoiadores:{" "}
                        {comment.particptions.map((p) => p.name + " ")}
                      </span>
                      <span className="text-xs">
                        Data: {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AppTemplate>
  );
};
