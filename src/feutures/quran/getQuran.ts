import axiosInstense from "@/libs/axios";
import { useEffect, useState } from "react";

export const useGetQuran = <T = any>(path: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async () => {
    const res = await axiosInstense.get<T>(path);
    // console.log(res?.data);

    setData(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading };
};
