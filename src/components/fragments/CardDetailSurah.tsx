type Props = {
  data: data;
};

type data = {
  nomor: string;
  id: string;
  ar: string;
  tr: string;
};

const CardDetailSurah: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4 px-3">
      <div className="flex flex-col gap-5">
        <h1 className="flex text-4xl font-bold justify-end text-right">
          {data.ar}
        </h1>
        <p
          className=" font-extralight text-sm text-justify"
          dangerouslySetInnerHTML={{ __html: data.tr }}
        ></p>
      </div>

      <div className="">
        <h1 className=" text-blue-900 font-semibold text-justify text-lg ">
          {data.nomor}. {data.id}
        </h1>
      </div>
    </div>
  );
};

export default CardDetailSurah;
