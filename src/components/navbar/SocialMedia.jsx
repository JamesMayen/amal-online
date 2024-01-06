import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="">
      <div className="md:flex hidden items-center">
        <span className="md:text-xl text-xl md:p-2 md:border border-sky-600 text-sky-600 rounded ml-3">
          <FaFacebook />
        </span>
        <span className="md:text-xl text-xl md:p-2 md:border border-sky-600 text-sky-600 rounded ml-3">
          <FaTwitter />
        </span>
        <span className="md:text-xl text-xl md:p-2 md:border border-sky-600 text-sky-600 rounded ml-3">
          <FaWhatsapp />
        </span>
      </div>
      <div className="md:hidden flex border border-sky-500 px-3 py-1 text-sky-500 text-sm rounded">
        Follow
      </div>
    </div>
  );
}
