import Spinner from "@/components/fragments/Spinner";
import DetailSurah from "@/components/layouts/DetailSurah";
import { useGetQuran } from "@/feutures/quran/getQuran";

const Detail = ({ params }: { params: { nomer: string } }) => {
  const { data, isLoading } = useGetQuran("data");

  // console.log(params.nomer);

  return (
    <div>
      <DetailSurah no={params.nomer} dataDetail={data} isLoading={isLoading} />
    </div>
  );
};

export default Detail;

export const getServerSideProps = async ({
  params,
}: {
  params: { nomer: string };
}) => {
  return {
    props: {
      params: {
        nomer: params.nomer,
      },
    },
  };
};
