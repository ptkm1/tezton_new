export const CardResume = ({ onPress }: any) => {
  return (
    <div
      className="min-w-[300px] border border-default dark:border-defaultdark p-4 flex flex-col rounded-lg"
      onClick={onPress}
    >
      <span className="text-lg">Titulo</span>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem
        veritatis impedit sit quisquam odit qui ducimus, nihil modi soluta enim
        a, eaque aut in asperiores excepturi numquam officia. Sint!
      </p>
    </div>
  );
};
