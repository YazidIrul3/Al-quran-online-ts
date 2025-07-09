import axiosInstense from "@/libs/axios";
import { useEffect, useState } from "react";

export const useGetQuran = <T = []>(path: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async () => {
    const res = await axiosInstense.get<T>(path);

    setData(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [path]);

  return { data, isLoading };
};
