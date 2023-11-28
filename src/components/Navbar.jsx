import { NavLink } from "react-router-dom";
import Button from "./Buttons";

export default function Navbar() {
  return (
    <nav className="bg-primary text-whit flex items-center justify-between sticky inset-0 px-[5%] py-3">
      <div className="text-2xl font-bold text-white">Educ247</div>
      <div className="md:block hidden">
        <ul className="flex text-white">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink className="block px-5" to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <Button text="Apply for certificate" />
      </div>
    </nav>
  );
}

const links = [
  { text: "Home", path: "/" },
  { text: "Pass Papers", path: "/pass-papers" },
  { text: "Scholarships", path: "/" },
  { text: "Learning Materials", path: "/learning-materials" },
  { text: "Blog", path: "/" },
];
