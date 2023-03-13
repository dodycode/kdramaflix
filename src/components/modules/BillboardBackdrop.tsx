interface Props {
  backdrop_path: string | null;
  trailer: string | null;
  trailerSite: string | null;
}

const BillboardBackdrop: React.FC<Props> = ({backdrop_path, trailer, trailerSite}) => {
  if(trailer){
    let trailerURL; 
    
    if(trailerSite === 'YouTube'){
      trailerURL = `${process.env.YOUTUBE_API_URL}/${trailer}?autoplay=1&mute=1&controls=0&loop=1&showinfo=0&playlist=${trailer}`;
    }

    if(trailerSite === 'Vimeo'){
      trailerURL = `${process.env.VIMEO_API_URL}/${trailer}?autoplay=1&background=1&loop=1&title=0&byline=0&portrait=0`;
    }

    return (
      <>
        <iframe width="100%" height="100%" className="absolute top-0 left-0 w-full h-full translate-y-[-80px]" src={trailerURL} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{pointerEvents: 'none'}}></iframe>
        <div className="trailer-vignette h-full w-full absolute top-0 left-0 right-[26.09%]">&nbsp;</div>
      </>
    )
  }

  return (
    <>
      <img className="absolute top-0 left-0 h-full w-full object-cover" src={`${process.env.IMAGE_API_URL}/${backdrop_path}`} />
      <div className="trailer-vignette h-full w-full absolute top-0 left-0 right-[26.09%]">&nbsp;</div>
    </>
  )
};

export default BillboardBackdrop;