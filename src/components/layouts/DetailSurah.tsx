import { useGetQuran } from "@/feutures/quran/getQuran";
import CardDetailSurah from "../fragments/CardDetailSurah";
import React, { useState } from "react";
import Spinner from "../fragments/Spinner";
import Link from "next/link";

type Props = {
  no: string;
};

interface Surah {
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

  verses: [Ayat];
}

interface Data {
  data: Surah;
}

interface Ayat {
  number: {
    inQuran: number;
    inSurah: number;
  };
  meta: {
    juz: number;
    page: number;
    manzil: number;
    ruku: number;
    hizbQuarter: number;
    sajda: {
      recommended: boolean;
      obligatory: boolean;
    };
  };
  text: {
    arab: string;
    transliteration: {
      en: string;
    };
  };
  translation: {
    en: string;
    id: string;
  };
  audio: {
    primary: string;
    secondary: [];
  };
  tafsir: {
    id: {
      short: string;
    };
  };
}

const DetailSurah: React.FC<Props> = ({ no }) => {
  // const { data: ayat } = useGetQuran<Ayat[]>(`surah/${no}`);
  const { data: surah, isLoading } = useGetQuran<Data>(`surah/${no}`);
  const [totalShowSurah, setTotalShowSurah] = useState<number>(20);

  const ayat = surah?.data?.verses?.slice(0, totalShowSurah);

  return (
    <section>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="min-w-lg max-w-lg w-lg flex flex-col mx-auto py-5 bg-slate-50 shadow-lg ">
          <div className=" flex flex-row items-center justify-evenly gap-4 px-4">
            <Link href={""} className=" w-[25px] h-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </Link>

            <div className="flex flex-col mx-auto justify-center  items-center font-bold my-5 w-full bg-slate-50 shadow-sm p-3">
              <h1 className=" text-4xl">{surah?.data?.name?.long}</h1>
              <h1 className="text-xl text-green-700 font-bold">
                {surah?.data?.name.transliteration.id}
              </h1>
              <h2 className="text-sm font-normal text-slate-800">
                {surah?.data?.name?.translation.id}
              </h2>
              <h6 className="text-sm text-slate-900 capitalize">{`${surah?.data?.revelation?.id} - ${surah?.data?.numberOfVerses} Ayat`}</h6>
            </div>

            <Link href={""} className=" w-[25px] h-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          </div>

          <main className=" flex flex-col gap-4">
            <div className="mt-5 gap-10 flex flex-col">
              {ayat?.map((item, i) => {
                return <CardDetailSurah key={i} data={item} />;
              })}
            </div>

            {/* {surah?.data?.numberOfVerses > totalShowSurah && (
              <div className=" flex justify-center items-center pb-2">
                <button
                  type="button"
                  className=" w-fit h-fit px-4 py-2 text-slate-50 bg-green-600 font-bold text-sm "
                  onClick={() => setTotalShowSurah(totalShowSurah + 20)}
                >
                  Lebih Banyak
                </button>
              </div>
            )} */}
          </main>

          <div className=" sticky bottom-0 left-0 right-0 bg-slate-50 shadow-md flex flex-col gap-3 p-2">
            <div className=" flex flex-row items-center gap-4 justify-between">
              <div className=" flex flex-row items-center gap-4">
                <div className=" w-[50px] h-[50px] rounded-lg bg-slate-300"></div>

                <div>
                  <h1 className="text-xl text-green-700 font-bold">
                    {surah?.data?.name?.transliteration?.id}
                  </h1>
                  <h2 className="text-sm font-normal text-slate-800">
                    {surah?.data?.name.translation.id}
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
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* <div className=" w-full">
              <audio id="audioId" className=" " controls src={surah?.data?.} />
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailSurah;
