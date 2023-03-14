import useBillboardLogo from "@/hooks/useBillboardLogo";
import useBillboardShow from "@/hooks/useBillboardShow";
import useBillboardVideo from "@/hooks/useBillboardVideo";
import LinesEllipsis from 'react-lines-ellipsis'
import BillboardBackdrop from "./BillboardBackdrop";
import BillboardShowInfo from "./BillboardShowInfo";

const Billboard: React.FC = () => {
  const { 
    data: billboardShow, 
    error: isBillboardShowError, 
    isLoading: isBillboardShowLoading 
  } = useBillboardShow();

  const { 
    data: billboardShowVideo, 
    error: isBillboardShowVideoError, 
    isLoading: isBillboardShowVideoLoading 
  } = useBillboardVideo(billboardShow);

  const { 
    data: billboardShowLogo, 
    error: isBillboardShowLogoError, 
    isLoading: isBillboardShowLogoLoading 
  } = useBillboardLogo(billboardShow);

  let enLogo, trailer, trailerSite;

  if(isBillboardShowLoading || isBillboardShowVideoLoading || isBillboardShowLogoLoading) {
    return (
      <>Loading...</>
    );
  }

  if(isBillboardShowError || isBillboardShowVideoError || isBillboardShowLogoError) {
    return (
      <>Error</>
    )
  }

  if(billboardShowLogo?.images?.logos?.length > 0) {
    enLogo = billboardShowLogo?.images?.logos?.find((logo: any) => logo.iso_639_1 === "en")?.file_path;
  }

  //todo add trailer
  if(billboardShowVideo?.videos?.results?.length > 0) {
    //try get trailers
    trailer = billboardShowVideo?.videos?.results?.find((video: any) => video.type === "Trailer")?.key;
    trailerSite = billboardShowVideo?.videos?.results?.find((video: any) => video.type === "Trailer")?.site;

    if(!trailer){
      //try get teasers
      trailer = billboardShowVideo?.videos?.results?.find((video: any) => video.type === "Teaser")?.key;
      trailerSite = billboardShowVideo?.videos?.results?.find((video: any) => video.type === "Teaser")?.site;
    }
  }

  return (
    <div className="overflow-hidden max-h-screen">
      <div className="relative w-screen h-screen lg:pt-[56.25%]">
        <BillboardBackdrop 
          backdrop_path={billboardShow?.backdrop_path} 
          trailer={trailer} 
          trailerSite={trailerSite}/>

        <BillboardShowInfo 
          logo={enLogo} 
          name={billboardShow?.name} 
          overview={billboardShow?.overview}/>
      </div>
    </div>
  );
};

export default Billboard;