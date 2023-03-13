import fetcher from "@/libs/fetcher";
import useSWR from "swr";

import { parameter } from "@/store/parameter";
import { useQuery } from "./useQuery";

const useBillboardShow = () => {
  const query = useQuery(parameter.value);

  return useSWR(
    `/api/billboard?${query}`, fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
}

export default useBillboardShow;