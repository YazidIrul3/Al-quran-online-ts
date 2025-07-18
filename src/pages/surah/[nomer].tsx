import DetailSurah from "@/components/layouts/DetailSurah";

const Detail = ({ params }: { params: { nomer: string } }) => {
  return (
    <div>
      <DetailSurah no={params.nomer} />
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
