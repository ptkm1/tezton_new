export const CardResume = ({ onPress }: any) => {
  return (
    <div
      className="min-w-[300px] border border-default dark:border-defaultdark p-4 flex flex-col rounded-lg bg-[#F8F9FF]"
      onClick={onPress}
    >
      <span className="text-lg">Titulo</span>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem
        veritatis impedit sit quisquam odit qui ducimus, nihil modi soluta enim
        a, eaque aut in asperiores excepturi numquam officia. Sint!
      </p>
      <div className="w-full flex justify-end">
      <img 
          src={'https://i1.sndcdn.com/artworks-rFvUaGN6YSuME7Aw-MyvseA-t500x500.jpg'}
          className="max-w-[30px] max-h-[30px] rounded-full overflow-hidden"
        />
      </div>
    </div>
  );
};
