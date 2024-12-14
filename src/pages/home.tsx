import Spinner from "@/components/fragments/Spinner";
import HomeLayout from "@/components/layouts/Home";
import { useGetQuran } from "@/feutures/quran/getQuran";

const Home = () => {
  const { data, isLoading } = useGetQuran("data");

  return <div>{!isLoading ? <HomeLayout data={data} /> : <Spinner />}</div>;
};

export default Home;
