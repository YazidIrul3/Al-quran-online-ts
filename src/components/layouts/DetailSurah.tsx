import { useGetQuran } from "@/feutures/quran/getQuran";
import CardDetailSurah from "../fragments/CardDetailSurah";
import React from "react";
import Spinner from "../fragments/Spinner";

type Props = {
  no: string;
  dataDetail: never[];
  isLoading: boolean;
};

const DetailSurah: React.FC<Props> = ({ no, dataDetail, isLoading }) => {
  const { data } = useGetQuran(`surat/${no}`);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto 2xl:w-9/12 xl:w-9/12 flex flex-col w-full py-5">
          <div className="flex flex-col mx-auto justify-center items-center font-bold my-5 w-full">
            <h1 className="text-3xl text-blue-800">
              {" "}
              {dataDetail?.map((item) =>
                item.nomor == no ? item.nomor : null
              )}
              . Qs.{" "}
              {dataDetail?.map((item) => (item.nomor == no ? item.nama : null))}{" "}
            </h1>
            <h2 className="text-xl text-yellow-600">
              {" "}
              {dataDetail?.map((item) =>
                item.nomor == no ? item.arti : null
              )}{" "}
            </h2>
            <h6 className="text-sm text-slate-900">
              {dataDetail?.map((item) => (item.nomor == no ? item.ayat : null))}{" "}
              {""}
              ayat
            </h6>
            <div className="h-1 w-full bg-slate-900 mt-2"></div>
          </div>
          <div className="mt-5 gap-10 flex flex-col">
            {data?.map((item, i) => {
              return <CardDetailSurah key={i} data={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailSurah;
