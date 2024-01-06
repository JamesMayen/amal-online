import Logo from "./Logo";
import MainNavigation from "./MainNavigation";
import SocialMedia from "./SocialMedia";
import {
  FiBarChart2,
  FiBell,
  FiBookOpen,
  FiHome,
  FiSearch,
  FiUpload,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between md:px-[8%] px-4 md:py-5 py-3 shadow-md">
        <Logo />
        <SocialMedia />
        <div className="md:hidden flex items-center text-sky-600 text-2xl">
          <span className="">
            <FiSearch />
          </span>
          <span className="mx-4">
            <FiUser />
          </span>
          <span className="-rotate-90 relative">
            <FiBarChart2 />
          </span>
        </div>
      </div>
      <MainNavigation />
    </div>
  );
}

export function MobileNavbar() {
  return (
    <div className="flex items-center justify-between fixed bottom-0 left-0 right-0 h-[3.5rem] bg-sky-600 text-white px-5">
      <Link className="text-2xl" to="/">
        <FiHome />
      </Link>
      <Link className="text-2xl" to="/learning-materials">
        <FiBookOpen />
      </Link>
      <Link className="text-2xl border-4 border-white bg-sky-600 rounded-full p-3 -mt-5">
        <FiUpload />
      </Link>
      <Link className="text-2xl" to="/friends">
        <FiUsers />
      </Link>
      <Link className="text-2xl" to="/">
        <FiBell />
      </Link>
    </div>
  );
}
