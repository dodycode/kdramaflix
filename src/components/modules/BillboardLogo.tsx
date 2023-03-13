import React from 'react';

interface Props {
  logo: string;
  name: string;
}

const BillboardLogo: React.FC<Props> = ({logo, name}) => {
  return (
    <>
      {logo ? (
        <div className="relative max-w-[30%] h-auto">
          <img src={`${process.env.IMAGE_API_URL}${logo}`} className="w-full h-full origin-bottom-left object-cover" />
        </div>
      ) : (
        <div className="relative w-[40%] h-auto">
          <h1 className="
            text-white
            text-1xl
            font-bold
            md:text-5xl
            lg:text-6xl
            drop-shadow-xl
          ">{name}</h1>
        </div>
      )}
    </>
  )
}

export default BillboardLogo;