import { useLastRead } from "@/hooks/useLastRead";
import Link from "next/link";

const LastReadFragment = () => {
  const { surah: lastRead } = useLastRead();

  return (
    <div className=" sticky bottom-0 left-0 right-0 bg-slate-50 shadow-md flex flex-col gap-3 p-2">
      <div className=" flex flex-row items-center gap-4 justify-between">
        <div className=" flex flex-row items-center gap-4">
          <div className=" w-[50px] h-[50px] rounded-lg bg-slate-300"></div>

          <div>
            <Link
              href={`/surah/${lastRead?.inSurah}`}
              className=" hover:underline"
            >
              <h1 className="text-xl text-green-700 font-bold">
                {lastRead?.surahName}
              </h1>
            </Link>
            <h2 className="text-sm font-normal text-slate-800">
              {lastRead?.arti}
            </h2>
          </div>
        </div>

        <div className=" flex flex-row items-center gap-4">
          <button className="text-gray-600 hover:text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button
            onClick={() => document.getElementById("audioId")?.onplay}
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg>
          </button>
        </div>
      </div>

      {/* <div className=" w-full">
              <audio id="audioId" className=" " controls src={surah?.data?.} />
            </div> */}
    </div>
  );
};

export default LastReadFragment;
