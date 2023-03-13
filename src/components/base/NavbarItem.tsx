import { useState } from "react";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface NavbarItemProps {
  children?: React.ReactNode;
  href: string;
  content: string;
  noMargin?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({href, content, children, noMargin = false, ...props}) => {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li onClick={onClick} className={`lg:first:ml-0 relative flex items-center gap-x-[8px] cursor-pointer${!noMargin ? ' ml-[20px]' : ''}`}>
      <a className="text-zinc-100 hover:text-zinc-300 transition duration-500 text-sm" href={href}>{content}</a>
      {children && (
        <>
          {isActive ? (
            <BsChevronUp className="text-zinc-100 hover:text-zinc-300 transition duration-500"/>
          ) : (
            <BsChevronDown className="text-zinc-100 hover:text-zinc-300 transition duration-500"/>
          )}
          
          {isActive && (
            <div className="bg-black w-56 text-white text-sm px-4 py-5 absolute top-[35px] left-0 border-2 border-gray-800">
            {children}
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default NavbarItem;