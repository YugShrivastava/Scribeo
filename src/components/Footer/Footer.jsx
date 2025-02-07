import React from "react";
import github from "../../assets/github.svg";
import x from "../../assets/x.png";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  return (
    <div className="relative flex flex-wrap items-center justify-center gap-2 sm:gap-14 sm:py-2 py-1 w-full bg-gray-800 bottom-0 text-center text-gray-100 dark:text-gray-200 dark:bg-[hsl(0,0%,17%)]">
      <div>© 2025 Yug Shrivastava. All Rights Reserved.</div>
      <div className="flex gap-2.5 items-center justify-center">
        <a href="https://github.com/YugShrivastava">
          <img
            src={github}
            alt="Github"
            width="24px"
            className="cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/in/yug-shrivastava">
          <img
            src={linkedin}
            alt="Linkedin"
            width="30px"
            className="cursor-pointer"
          />
        </a>
        <a href="https://x.com/_Yug12">
          <img src={x} alt="X" width="30px" className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
