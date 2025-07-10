import { useLastRead } from "@/hooks/useLastRead";
import Image from "next/image";
import Link from "next/link";

const LastReadFragment = () => {
  const { surah: lastRead } = useLastRead();

  return (
    <div
      className={`${
        lastRead?.audio == "" ||
        lastRead?.arti == "" ||
        lastRead?.ayat == 0 ||
        lastRead?.juz == 0 ||
        lastRead?.nameArab == "" ||
        lastRead?.surahName == "" ||
        lastRead?.inSurah == 0
          ? "hidden"
          : " sticky "
      }  bottom-0 left-0 right-0 bg-slate-50 shadow-md flex flex-col gap-3 px-4 py-3`}
    >
      <div className=" flex flex-row items-center gap-4 justify-between">
        <div className=" flex flex-row items-center gap-4">
          <div className=" w-[40px] h-[40px] rounded-full">
            <Image
              className=""
              src={"/quran.png"}
              width={100}
              height={100}
              alt="quran-img"
            />
          </div>

          <div>
            <div className=" flex flex-row items-center gap-2 font-bold">
              <h1 className="text-xl text-green-700 font-bold">
                {lastRead?.surahName}
              </h1>

              <h2 className="">{"-"}</h2>

              <h6 className="text-sm text-slate-900 capitalize">{`Ayat ${lastRead?.ayat}`}</h6>
            </div>
            <h2 className="text-sm font-normal text-slate-800">
              {lastRead?.arti}
            </h2>
          </div>
        </div>

        <Link href={`/surah/${lastRead?.inSurah}`} className=" hover:underline">
          Baca
        </Link>
      </div>
    </div>
  );
};

export default LastReadFragment;
