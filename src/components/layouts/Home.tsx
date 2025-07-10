import Card from "@/components/fragments/Card";
import LinkHeader from "../elements/LinkHeader";
import React, { useEffect, useState } from "react";
import { useGetQuran } from "@/feutures/quran/getQuran";
import Spinner from "../fragments/Spinner";
import LastReadFragment from "../fragments/LastReadFragment";
import Image from "next/image";

type Props = {
  data: Surah[];
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
}

const HomeLayout = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, isLoading } = useGetQuran<Props>("surah");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  const surah = data?.data?.filter((item) =>
    item.name.transliteration.id.includes(searchValue)
  );

  return (
    <div>
      {!isLoading ? (
        <section className=" w-full mx-auto ">
          <div className=" bg-green-700 text-slate-50 flex lg:flex-row flex-col gap-3 items-center justify-around py-4">
            <div className=" flex flex-row items-center gap-3">
              <div className=" w-[50px] h-[50px] rounded-full">
                <Image
                  className=""
                  src={"/quran.png"}
                  width={100}
                  height={100}
                  alt="quran-img"
                />
              </div>
              <div className=" flex flex-col ">
                <h1 className=" font-bold text-2xl">Al-Quran Online</h1>
                <p className=" text-sm">
                  Baca dan Pelajari Al-Quran dengan Tajwid
                </p>
              </div>
            </div>

            <div className=" relative lg:w-fit w-full px-4">
              <input
                onChange={handleOnChange}
                className=" bg-slate-50 px-4 py-2 rounded-full w-full outline-none text-slate-900"
                placeholder="Cari Surat atau ayat"
                type="text"
              />

              <div className=" absolute top-1/2 right-9 -translate-y-1/2">
                <img src="search.svg" alt="search-svg" />
              </div>
            </div>
          </div>
          <div className=" px-2 scrollbar-none font-bold text-lg my-5 mx-auto items-center sm:justify-center w-full flex flex-row  gap-5  overflow-x-scroll">
            <LinkHeader href="/surah/36">Yasin</LinkHeader>
            <LinkHeader href="/surah/56">Al-Waqiah</LinkHeader>
            <LinkHeader href="/surah/67">Al-Mulk</LinkHeader>
            <LinkHeader href="/surah/18">Al-Kahfi</LinkHeader>
            <LinkHeader href="/surah/55">Al-Rahman</LinkHeader>
          </div>
          <div className=" px-3  bg-slate-50 shadow-sm max-w-lg  w-lg mx-auto min-w-lg relative">
            <div className=" flex flex-row items-center mb-4 gap-3">
              <div className=" flex flex-col">
                <button type="button" className=" text-[15px]">
                  Surah
                </button>
                <div className=" h-1 bg-green-700"></div>
              </div>
            </div>
            <div className="   flex flex-col justify-center items-center min-h-screen h-full  bg-slate-50 shadow-sm">
              {surah?.map((item, i) => {
                return <Card key={i} no={i + 1} PropsCard={item} />;
              })}
            </div>

            <LastReadFragment />
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default HomeLayout;
