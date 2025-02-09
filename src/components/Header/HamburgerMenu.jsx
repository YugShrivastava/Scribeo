import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

function HamburgerMenu({ navItems, authStatus, logoutHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // TODO: make hambureger close when clicked elsewhere
  return (
    <>
      <button
        onClick={toggleMenu}
        className="absolute md:hidden top-8 right-24 w-[24px] h-[23px] bg-transparent flex justify-center items-center"
      >
        <span
          className={`${
            isOpen ? "active " : ""
          } transform-1 absolute w-[24px] h-[3px] bg-gray-200 dark:bg-black rounded-4xl transition-all duration-200 ease-in-out`}
        ></span>
        <span
          className={`${
            isOpen ? "active " : ""
          } transform-2 absolute w-[24px] h-[3px] bg-gray-200 dark:bg-black rounded-full transition-all duration-200 ease-in-out`}
        ></span>
        <span
          className={`${
            isOpen ? "active " : ""
          } transform-3 absolute w-[24px] h-[3px] bg-gray-200 dark:bg-black rounded-4xl transition-all duration-200 ease-in-out`}
        ></span>
        <span
          className={`${
            isOpen ? "active " : ""
          } transform-4 absolute w-[24px] h-[3px] bg-gray-200 dark:bg-black rounded-4xl transition-all duration-200 `}
        ></span>
      </button>
      {isOpen ? (
        <div className="md:hidden absolute top-20 rounded-md right-16 flex flex-col items-center justify-center gap-2 w-[100px] h-auto accent">
          <ul className="flex flex-wrap items-center justify-around">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link to={item.path} className="">
                    <Button
                      bgColor=""
                      hoverBgColor="var(--accent)"
                      text={item.name}
                      className="text-primary"
                      onClick={toggleMenu}
                    />
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          {authStatus ? (
            <span className="w-full">
              <Button
                text="Logout"
                bgColor=""
                hoverBgColor=""
                textColor="text-gray-100 dark:text-gray-200"
                className="bg-gray-900 dark:bg-gray-700 w-full hover:bg-gray-700 dark:hover:bg-gray-900"
                onClick={() => {
                  logoutHandler()
                  toggleMenu()
                }}
              />
            </span>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default HamburgerMenu;
