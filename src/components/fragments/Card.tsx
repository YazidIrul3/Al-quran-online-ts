import Link from "next/link";

type Props = {
  PropsCard: PropsCard;
  no: number;
};
type PropsCard = {
  number: number;
  sequence: number;
  numberOfVerses: number;
  name: {
    short: string;
    long: string;
    transliteration: {
      en: string;
      id: string;
    };
    translation: {
      en: string;
      id: string;
    };
  };
  revelation: {
    arab: string;
    en: string;
    id: string;
  };
  tafsir: {
    id: string;
  };
};
const Card = ({ PropsCard, no }: Props) => {
  return (
    <Link
      href={`/surah/${PropsCard.number}`}
      className=" hover:duration-75 hover:bg-green-100 border hover:border-green-600 mx-auto min-h-full min-w-full w-full bg-white p-4 gap-5 shadow-sm rounded-xl flex items-center h-24"
    >
      <div className="flex items-center gap-4 w-11/12">
        <div className="col-span-1">
          <h1 className="font-bold text-2xl text-slate-900">{no}</h1>
        </div>
        <div className="flex flex-col mr-3  text-slate-900 ">
          <h1 className="font-bold">{PropsCard.name.transliteration.id}</h1>
          <div className=" flex items-center text-xs gap-2">
            <h1 className="font-thin flex text-wrap text-justify">
              {PropsCard.name.translation.id}
            </h1>
            <div className="w-1 h-1 rounded-full bg-slate-900"></div>
            <h1 className="font-thin">{PropsCard.numberOfVerses}</h1>
          </div>
        </div>
      </div>

      <div className=" ml-4 w-1/3">
        <h1 className="text-slate-900 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl">
          {PropsCard.name.short}
        </h1>
      </div>
    </Link>
  );
};

export default Card;
