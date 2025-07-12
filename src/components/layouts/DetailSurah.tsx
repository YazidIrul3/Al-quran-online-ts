import { useGetQuran } from "@/feutures/quran/getQuran";
import CardDetailSurah from "../fragments/CardDetailSurah";
import React, { useState } from "react";
import Spinner from "../fragments/Spinner";
import Link from "next/link";
import LastReadFragment from "../fragments/LastReadFragment";

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
      long: string;
    };
  };
}

const DetailSurah: React.FC<Props> = ({ no }) => {
  const { data: surah, isLoading } = useGetQuran<Data>(`surah/${no}`);
  const [totalShowSurah, setTotalShowSurah] = useState<number>(20);
  const ayat = surah?.data?.verses?.slice(0, totalShowSurah);

  return (
    <section className=" px-2">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="min-w-lg max-w-lg w-lg flex flex-col mx-auto py-5 bg-slate-50 shadow-lg ">
          <div className=" flex flex-row items-center gap-2 px-2 text-slate-600 font-bold text-lg">
            <Link href={"/"} className=" w-[25px] h-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </Link>

            <div className=" w-[15px] h-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>

            <h3 className=" text-sm font-bold">
              {surah?.data?.name?.transliteration?.id}
            </h3>
          </div>

          <div className=" flex flex-row items-center justify-evenly gap-4 px-4">
            <Link
              href={
                surah?.data?.number
                  ? surah?.data?.number > 1
                    ? `/surah/${Number(no) - 1}`
                    : "/surah/114"
                  : ""
              }
              className=" w-[25px] h-[25px]"
            >
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
              <h1 className=" text-4xl text-red-900">
                {surah?.data?.name?.long}
              </h1>
              <h1 className="text-xl text-green-700 font-bold">
                {surah?.data?.name.transliteration.id}
              </h1>
              <h2 className="text-sm font-normal text-slate-800">
                {surah?.data?.name?.translation.id}
              </h2>
              <h6 className="text-sm text-slate-900 capitalize">{`${surah?.data?.revelation?.id} - ${surah?.data?.numberOfVerses} Ayat`}</h6>
            </div>
            <Link
              href={
                surah?.data?.number
                  ? surah?.data?.number < 114
                    ? `/surah/${Number(no) + 1}`
                    : "/surah/1"
                  : ""
              }
              className=" w-[25px] h-[25px]"
            >
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
                return (
                  <CardDetailSurah
                    key={i}
                    data={item}
                    surah={surah?.data ? surah?.data : null}
                  />
                );
              })}
            </div>

            {surah?.data?.numberOfVerses
              ? surah?.data?.numberOfVerses > totalShowSurah && (
                  <div className=" flex justify-center items-center pb-2">
                    <button
                      type="button"
                      className=" w-fit h-fit px-4 py-2 text-slate-50 bg-green-600 font-bold text-sm "
                      onClick={() => setTotalShowSurah(totalShowSurah + 20)}
                    >
                      Lebih Banyak
                    </button>
                  </div>
                )
              : null}
          </main>
          <LastReadFragment />
        </div>
      )}
    </section>
  );
};

export default DetailSurah;
