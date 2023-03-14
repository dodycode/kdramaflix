import React from 'react';

interface Props {
  logo: string;
  name: string;
}

const BillboardLogo: React.FC<Props> = ({logo, name}) => {
  return (
    <>
      {logo ? (
        <div className="relative mx-auto md:mx-0 max-w-[75%] lg:max-w-[30%] h-auto mb-[50px] lg:mb-0">
          <img src={`${process.env.IMAGE_API_URL}${logo}`} className="w-full h-full origin-bottom-left object-cover" />
        </div>
      ) : (
        <div className="relative mx-auto md:mx-0 md:w-[40%] h-auto mb-[50px] lg:mb-0">
          <h1 className="
            text-white
            text-3xl
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