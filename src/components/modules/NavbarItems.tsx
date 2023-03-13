import NavbarItem from '@/components/base/NavbarItem';

const NavbarItems: React.FC = () => {
  return (
    <>
      {/* Desktop */}
      <ul className="list-none px-0 ml-[48px] hidden lg:flex">
        <NavbarItem href="#" content="Home"/>
        <NavbarItem href="#" content="TV Series"/>
        <NavbarItem href="#" content="Movies"/>
        <NavbarItem href="#" content="New & Popular"/>
        <NavbarItem href="#" content="My List"/>
      </ul>

      {/* Mobile */}
      <div className="flex lg:hidden">
        <NavbarItem href="#" content="Browse">
          <ul className="list-none px-0 flex flex-col gap-y-[4px]">
            <NavbarItem href="#" content="TV Series" noMargin={true}/>
            <NavbarItem href="#" content="Movies" noMargin={true}/>
            <NavbarItem href="#" content="New & Popular" noMargin={true}/>
            <NavbarItem href="#" content="My List" noMargin={true}/>
          </ul>
        </NavbarItem>
      </div>

      {/* Search */}
      {/* <div className="flex items-center ml-auto">
        <div className="relative">
          <input className="bg-zinc-900 bg-opacity-90 text-zinc-100 placeholder-zinc-100 border border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent rounded-md py-2 px-4 block w-64 appearance-none leading-normal transition duration-500" type="text" placeholder="Search for a titles, genres..." />
        </div>
      </div> */}
    </>
  );
};

export default NavbarItems;