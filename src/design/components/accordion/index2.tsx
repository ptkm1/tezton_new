export const Accordion = () => {
  return (
    <div className="border border-default dark:border-defaultdark">
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
            data-collapse-target="collapse-1"
          >
            <span>Custom Title</span>
          </button>
        </h6>

        <div
          data-collapse="collapse-1"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            Custom Content
          </div>
        </div>
      </div>
    </div>
  );
};
