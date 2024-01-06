import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiX } from "react-icons/fi";
import { navigationLinksData } from "../../assets/data";
import { useState } from "react";

const menuVars = {
  initial: {
    // scaleY: 0,
    clipPath: "circle(0.4% at 0 0)",
  },
  animate: {
    // scaleY: 1,
    clipPath: "circle(140.5% at 99% 0)",
    transition: {
      duration: 0.8,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    // scaleY: 0,
    clipPath: "circle(0.4% at 0 0)",
    transition: {
      delay: 0.3,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
export default function MobileNav({ openMenu, toggleMenu }) {
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-screen w-full absolute right-0 top-0 z-50 bg-white text-gray-700 px-6 py-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">Menu</span>
            <div
              className="md:hidden block text-3xl -rotate-90"
              onClick={() => toggleMenu(false)}
            >
              <FiX />
            </div>
          </div>
          <motion.ul
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
          >
            {navigationLinksData.map((link, index) => (
              <div className="overflow-hidden py-2">
                <MobileNavLink
                  key={index}
                  link={link}
                  toggleMenu={toggleMenu}
                />
              </div>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// mobile navb links
const MobileNavLink = ({ link, toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileLinkVars = {
    initial: {
      y: "80px",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div variants={mobileLinkVars} className="uppercase ">
      {link.sublinks ? (
        <div>
          <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
            {link.text}
            <FiChevronDown
              className={`text-xl ml-3 duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isOpen && (
            <div className="">
              {link.sublinks.map((subl) => (
                <Link
                  className="block px-3 py-3"
                  to={subl.path}
                  onClick={toggleMenu}
                >
                  {subl.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link className="" to={link.path} onClick={toggleMenu}>
          {link.title}
        </Link>
      )}
    </motion.div>
  );
};
