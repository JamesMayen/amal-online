import { FaDownload, FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function PassPaperPage() {
  return (
    <div className="md:px-[5%] px-3">
      <div className="flex justify-between items-center my-4">
        <div className="md:flex hidden">
          {links.map((link) => (
            <div className="px-4">{link}</div>
          ))}
        </div>
        <div className="flex bg-white md:w-[400px] border border-primary/50 rounded-md">
          <input
            className="md:h-[3rem] h-[2.5rem] w-full border-none bg-transparent px-4"
            type="search"
            placeholder="Search..."
          />
          <button className="md:bg-primary flex items-center px-4">
            <FaSearch />
            <span className="md:block hidden">Find</span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="md:text-2xl font-semibold">Pass Papers</h2>
        <span className="flex items-center border bg-white px-3 py-1">
          <FiChevronDown />
          2020/2021
        </span>
      </div>
      <div className="flex">
        <div className="md:block hidden w-[30%] bg-white p-5 mr-7">courses</div>
        <div className="flex-1">
          {materials.map((book) => (
            <div className="border border-primary/50 mb-2 bg-white flex">
              <div className="flex-1 flex items-center justify-between mx-2">
                <h3 className="md:font-semibold">{book.title}</h3>
                <p className="text-sm">{book.description}</p>
              </div>
              <div className="md:bg-primary text-primary flex items-center md:border-none border-l border-primary md:text-white px-4 py-3">
                <FaDownload />
                <span className="md:block hidden">download</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const materials = [
  {
    title: "English",
    description: "2021/2022",
  },
  {
    title: "Basic Math",
    description: "2022/2023",
  },
  {
    title: "Physics",
    description: "2020/2021",
  },
  {
    title: "Biology",
    description: "2015/2016",
  },
  {
    title: "Chemistry",
    description: "2015/2016",
  },
  {
    title: "Biology",
    description: "2015/2016",
  },
  {
    title: "Physics",
    description: "2020/2021",
  },
  {
    title: "Biology",
    description: "2015/2016",
  },
  {
    title: "Chemistry",
    description: "2015/2016",
  },
  {
    title: "Biology",
    description: "2015/2016",
  },
];
const links = [
  "Math",
  "Physic",
  "Biology",
  "CRE",
  "Islamic",
  "History",
  "Chemistry",
];
