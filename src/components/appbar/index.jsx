import {
  FiBarChart2,
  FiBell,
  FiMail,
  FiSearch,
  FiUpload,
  FiUser,
} from "react-icons/fi";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import SocialMedia from "./SocialMedia";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function Appbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  return (
    <div className="">
      <div className="flex justify-between items-center md:px-[8%] px-4 py-4">
        <Logo />
        <SocialMedia />
      </div>
      <div className="bg-sky-800 text-white md:flex hidden items-center justify-between md:px-[8%] px-4 md:py-0 py-3">
        <span
          className="md:hidden block text-2xl rotate-90 relative"
          onClick={toggleMenu}
        >
          <FiBarChart2 />
        </span>
        <MobileNav openMenu={openMenu} toggleMenu={toggleMenu} />
        <NavigationLinks />
        <div className="flex items-center">
          <SearchBar />
          <button className="flex items-center rounded md:bg-white md:text-rose-600 md:px-4 md:py-2 mr-5">
            <FiUpload className="text-xl mr-2" />
            <span className="md:block hidden">Share file</span>
          </button>
          <NavButtons />
        </div>
      </div>
    </div>
  );
}

function NavButtons({ profile = true }) {
  return (
    <div className="flex">
      {profile ? (
        <div className="flex">
          <span className="md:text-2xl text-xl mr-5 md:hidden block">
            <FiSearch />
          </span>
          <span className="md:text-2xl text-xl">
            <FiBell />
          </span>
          <span className="md:text-2xl text-xl mx-5">
            <FiMail />
          </span>
          <span className="md:text-2xl text-xl">
            <FiUser />
          </span>
        </div>
      ) : (
        <button className="bg-rose-600 px-4 py-1 rounded">Login</button>
      )}
    </div>
  );
}

function SearchBar() {
  return (
    <div className="h-[2.5rem] bg-white rounded overflow-hidden md:flex hidden items-center mr-6">
      <input
        className="h-full w-full bg-transparent border-none focus:outline-none focus:border-none px-4"
        type="search"
        placeholder="Enter your Index No"
      />
      <button className="h-full bg-rose-600 px-4"> Check</button>
    </div>
  );
}
