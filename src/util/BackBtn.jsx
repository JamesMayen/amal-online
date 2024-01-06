import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BackBtn() {
  return (
    <Link className="mr-4 text-xl" to={-1}>
      {/* <FaArrowLeft /> */}
      <FiArrowLeft />
    </Link>
  );
}
