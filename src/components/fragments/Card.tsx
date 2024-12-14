import Link from "next/link";

type Props = {
  PropsCard: PropsCard;
  no: number;
};
type PropsCard = {
  nama: string;
  asma: string;
  arti: string;
  ayat: number;
  nomor: string;
};
const Card = ({ PropsCard, no }: Props) => {
  return (
    <Link href={`/detail/surah/${PropsCard.nomor}`} className=" hover:duration-75 hover:bg-green-100 border hover:border-green-600 mx-auto min-h-full min-w-full w-full bg-white p-4 gap-5 shadow-sm rounded-xl flex items-center h-24">
      <div className="flex items-center gap-4 w-11/12">
        <div className="col-span-1">
          <h1 className="font-bold text-2xl text-slate-900">{no}</h1>
        </div>
        <div className="flex flex-col mr-3  ">
          <h1 className="font-bold text">{PropsCard.nama}</h1>
          <div className=" flex items-center text-xs gap-2">
            <h1 className="font-thin flex text-wrap text-justify">{PropsCard.arti}</h1>
            <div className="w-1 h-1 rounded-full bg-slate-900"></div>
            <h1 className="font-thin">{PropsCard.ayat}</h1>
          </div>
        </div>
      </div>

      <div className=" ml-4 w-1/3">
        <h1 className="font-thin 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl">{PropsCard.asma}</h1>
      </div>
    </Link>
  );
};

export default Card;
