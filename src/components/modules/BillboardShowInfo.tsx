import LinesEllipsis from "react-lines-ellipsis";
import BillboardLinks from "./BillboardLinks";
import BillboardLogo from "./BillboardLogo";

interface Props {
  logo: string;
  name: string;
  overview: string;
}

const BillboardShowInfo: React.FC<Props> = ({ logo, name, overview }) => {
  return (
    <div className="absolute top-0 text-white w-full h-screen flex flex-col justify-center">
        <div className="container flex flex-col translate-y-[-20px]">
          <BillboardLogo logo={logo} name={name} />
          <LinesEllipsis 
            text={overview}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
            className="w-[50%] text-white text-[20px] my-[18px] drop-shadow-xl"/>
          <BillboardLinks />
        </div>
      </div>
  )
}

export default BillboardShowInfo;