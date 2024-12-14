import axiosInstense from "@/libs/axios";
import { useEffect, useState } from "react";

export const useGetQuran = (path: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async () => {
    const res = await axiosInstense.get(path);
    // console.log(res?.data);

    setData(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading };
};
