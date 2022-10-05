import Image from "next/image";
import Logo from "../../public/aviato_logo.svg";
import SearchIcon from "../../public/search.svg";
import { FiPlus } from "react-icons/fi";
import Dropdown from "../dropdownmenu/DropdownMenu";
import type { ReactElement } from "react";

const Navbar = () => {
  return (
    <div className="w-full p-1 fixed z-10 bg-gray-50 border-gray border-b-[0.1rem]">
      <div className="flex justify-between items-center px-4 lg:px-16">
        <div className="flex items-center">
          <Image src={Logo} />
        </div>

        <div className="hidden md:flex">
          <div className="flex items-center">
            <form>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Search
              </label>
              <div className="flex items-center">
                <div className="flex absolute items-center pl-3 w-8 pointer-events-none">
                  <Image src={SearchIcon} alt="SearchIcon" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="p-3 px-10 w-[28.25rem] text-base text-gray-800 font-['NeueNormal'] bg-gray-200 focus:bg-gray-50 hover:bg-gray-50 border hover:border-gray-200 focus:border-gray-200 rounded-lg outline-none"
                  placeholder="Search"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <button>
              <div className="text-white bg-[#3981F6] p-4 mx-2 border-none rounded-full">
                <FiPlus />
              </div>
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center ">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
Navbar.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};
