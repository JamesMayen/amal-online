import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex items-center">
      <span className="md:text-xl text-sm md:p-2 p-1 border border-sky-600 text-sky-600 rounded ml-3">
        <FaFacebook />
      </span>
      <span className="md:text-xl text-sm md:p-2 p-1 border border-sky-600 text-sky-600 rounded ml-3">
        <FaTwitter />
      </span>
      <span className="md:text-xl text-sm md:p-2 p-1 border border-sky-600 text-sky-600 rounded ml-3">
        <FaInstagram />
      </span>
      <span className="md:text-xl text-sm md:p-2 p-1 border border-sky-600 text-sky-600 rounded ml-3">
        <FaWhatsapp />
      </span>
    </div>
  );
}
