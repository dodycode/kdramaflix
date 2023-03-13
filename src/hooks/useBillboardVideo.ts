import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useBillboardVideo = (billboardShow: any) => {
  return useSWR(
    `/api/billboard/video?showID=${billboardShow?.id}`, fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
};

export default useBillboardVideo;
