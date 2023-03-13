import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useBillboardLogo = (billboardShow: any) => {
  return useSWR(
    `/api/billboard/logo?showID=${billboardShow?.id}`, fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
}

export default useBillboardLogo;