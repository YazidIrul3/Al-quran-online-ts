import Card from "@/components/fragments/Card";
import LinkHeader from "../elements/LinkHeader";

type Props = {
  data: never[];
};

const HomeLayout = ({ data }: Props) => {
  return (
    <div className=" container mx-auto 2xl:w-9/12 xl:w-9/12 flex flex-col w-full py-4 min-h-screen h-full">
      <div className="font-bold text-lg my-5 mx-auto flex items-center justify-center gap-5">
        <LinkHeader href="/detail/surah/36">Yasin</LinkHeader>
        <LinkHeader href="/detail/surah/56">Al-Waqiah</LinkHeader>
        <LinkHeader href="/detail/surah/67">Al-Mulk</LinkHeader>
        <LinkHeader href="/detail/surah/18">Al-Kahfi</LinkHeader>
        <LinkHeader href="/detail/surah/55">Al-Rahman</LinkHeader>
      </div>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
        {data?.map((item, i) => {
          return <Card key={i} no={i + 1} PropsCard={item} />;
        })}
      </div>
    </div>
  );
};

export default HomeLayout;
