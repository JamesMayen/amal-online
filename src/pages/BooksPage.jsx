import { FaFileDownload, FaSearch } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function BooksPage() {
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
        <div className="flex items-center">
          <span className="font-bold">Books</span>
          <span className="">
            <FiChevronRight />
          </span>
          <span className="">JavaScript</span>
        </div>
        <span className="flex items-center border bg-white px-3 py-1">
          <FiChevronDown />
          All Books
        </span>
      </div>
      <div className="flex">
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 flex-1">
          {materials.map((book) => (
            <div className="border border-primary mb-3 bg-white">
              <div className="md:h-[160px] h-[140px] bg-gray-100">
                <img src={book.image} alt="" />
              </div>
              <div className="md:p-3 p-2">
                <p className="md:font-base font- line-clamp-2">
                  {book.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="">25 KB</div>
                  <button className="bg-primary flex items-center text-white px-4 py-1">
                    <FaFileDownload />
                    <span className="md:block hidden">download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:block hidden w-[25%] bg-white p-5 ml-6">courses</div>
      </div>
    </div>
  );
}

const materials = [
  {
    title: "Advace JavaScript",
    image: process.env.PUBLIC_URL + "/images/js.jpeg",
    description: `It is an unofficial and free JavaScript ebook created for educational purposes. All the content is
    extracted from Stack Overflow Documentation`,
  },
  {
    title: "Basic JavaScript",
    image: process.env.PUBLIC_URL + "/images/js2.jpeg",
    description: `JavaScript is a case-sensitive language. This means the language considers capital letters to be
    different from their lowercase counterparts`,
  },
  {
    title: "Advace JavaScript",
    image: process.env.PUBLIC_URL + "/images/js.jpeg",
    description: `It is an unofficial and free JavaScript ebook created for educational purposes. All the content is
    extracted from Stack Overflow Documentation`,
  },
  {
    title: "Basic JavaScript",
    image: process.env.PUBLIC_URL + "/images/js2.jpeg",
    description: `JavaScript is a case-sensitive language. This means the language considers capital letters to be
    different from their lowercase counterparts`,
  },
  {
    title: "Advace JavaScript",
    image: process.env.PUBLIC_URL + "/images/js.jpeg",
    description: `It is an unofficial and free JavaScript ebook created for educational purposes. All the content is
    extracted from Stack Overflow Documentation`,
  },
  {
    title: "Basic JavaScript",
    image: process.env.PUBLIC_URL + "/images/js2.jpeg",
    description: `JavaScript is a case-sensitive language. This means the language considers capital letters to be
    different from their lowercase counterparts`,
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
