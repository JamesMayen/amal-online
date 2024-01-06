import { Heading2 } from "../util/Headings";
import PaperCard from "../components/PaperCard";
import { FiFilter } from "react-icons/fi";
import BackBtn from "../util/BackBtn";

export default function PasspapersPage() {
  return (
    <div className="rounded-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BackBtn />
          <div className="text-xl">Pass papers</div>
        </div>
        <div className="flex items-center bg-gray-100 px-4 py-1">
          <FiFilter />
          All files
        </div>
      </div>
      <div className="mt-6">
        <PaperCard files={materials} />
      </div>
    </div>
  );
}

const materials = [
  {
    title: "Advace JavaScript",
    subject: "Programming",
  },
  {
    title: "Basic Math",
    subject: "Math",
  },
  {
    title: "Christian Religion",
    subject: "CRE",
  },
  {
    title: "History of South Sudan",
    subject: "History",
  },
];
