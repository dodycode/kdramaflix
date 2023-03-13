import Button from "@/components/base/Button";

import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";

const BillboardLinks: React.FC = () => {
  return (
    <div className="flex items-center w-full gap-x-4">
      <Button>
        <FaPlay className="mr-[0.5rem] text-black" size="27px" />
        <span>Watch</span>
      </Button>
      <Button variant="secondary">
        <BiInfoCircle className="mr-[0.5rem] text-white" size="27px" />
        <span>More Info</span>
      </Button>
    </div>
  )
}

export default BillboardLinks;