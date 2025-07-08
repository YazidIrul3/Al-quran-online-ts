type Props = {
  data: data;
};

type data = {
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
};

const CardDetailSurah: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className=" text-green-700 font-bold bg-green-200 rounded-full px-3 py-1 w-fit h-fit">
        <h1>{data?.number?.inSurah}</h1>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="flex text-3xl font-bold justify-end text-right">
          {data.text?.arab}
        </h1>
        <p
          className=" font-extralight text-sm text-justify"
          dangerouslySetInnerHTML={{ __html: data.text?.transliteration?.en }}
        ></p>
      </div>

      <div className="text-slate-700 flex flex-col gap-1 ">
        <div className=" flex flex-col p-2">
          <h1 className=" font-bold text-lg">Terjemahan :</h1>
          <h1 className="   text-justify text-sm ">{data?.translation?.id}</h1>
        </div>

        <div className=" flex flex-col gap-2 bg-slate-100  p-2">
          <h2 className=" text-blue-700 font-bold text-sm">Tafsir :</h2>
          <p className=" text-xs text-justify text-blue-700">
            {data?.tafsir?.id?.short}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetailSurah;
