import { useBookmark } from "@/hooks/useBookmak";
import Link from "next/link";

type Props = {
  data: data;
  index: number;
};
type data = {
  ayat: number | undefined;
  lafadz: string;
  surah: string | undefined;
  inSurah: number;
  arti: string;
};

const CardColection = ({ data, index }: Props) => {
  const { deleteBookmark } = useBookmark();

  return (
    <div className="relative">
      <Link
        href={`/surah/${data?.inSurah}`}
        className="  hover:duration-75 hover:bg-green-100 border hover:border-green-600 mx-auto min-h-full min-w-full w-full bg-white p-4 gap-5 shadow-sm rounded-xl flex items-center h-24"
      >
        <div className="flex flex-col gap-4 w-11/12">
          <div className="flex flex-row items-center  justify-between mr-3  text-slate-900 ">
            <div className=" flex  items-center gap-2 flex-row-reverse">
              <h1 className="font-bold">{data.surah}</h1>
              {"-"}
              <h1 className="font-thin">Ayat {data.ayat}</h1>
            </div>
          </div>
          <h1 className="font-thin flex text-wrap text-right text-xl justify-end w-full">
            {data.lafadz}
          </h1>
        </div>
      </Link>
      <button
        onClick={() => deleteBookmark(index)}
        type="button"
        className=" absolute top-4 right-4 w-[22px] h-[22px] flex justify-center items-center text-sm z-40  bg-red-600 text-slate-50 font-bold rounded-full"
      >
        x
      </button>
    </div>
  );
};

export default CardColection;
