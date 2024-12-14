import Spinner from "@/components/fragments/Spinner";
import HomeLayout from "@/components/layouts/Home";
import { useGetQuran } from "@/feutures/quran/getQuran";

export default function Home() {
  const { data, isLoading } = useGetQuran("data");

  return <div>{!isLoading ? <HomeLayout data={data} /> : <Spinner />}</div>;
}
