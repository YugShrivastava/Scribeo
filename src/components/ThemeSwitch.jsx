import { useEffect, useState } from "react";

function ThemeSwitch({loading = false}) {
  const [theme, setTheme] = useState("");
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
      setFirst(false);
    } else {
      setTheme("light");
      setFirst(false);
    }
  }, []);

  useEffect(() => {
    if (!first) {
      const html = document.querySelector("html");
      html.classList.remove("light", "dark");
      html.classList.add(theme);

      localStorage.setItem("theme", theme);
    }
  }, [theme, first]);

  return (
    <div className="absolute top-7 right-8">
      <button
        className={`${loading ? 'hidden' : ''}  w-7 cursor-pointer duration-75 sm:opacity-75 dark:sm:opacity-60 hover:opacity-100`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "dark" ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g
                clipPath="url(#a)"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              >
                {" "}
                <path
                  d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  fill="#000000"
                  fillOpacity=".16"
                ></path>{" "}
                <path d="M12 19v4M12 1v4" strokeLinecap="round"></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="a">
                  {" "}
                  <path fill="#ffffff" d="M0 0h24v24H0z"></path>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g
                clipPath="url(#a)"
                stroke="#c9c9c9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              >
                {" "}
                <path
                  d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  fill="#c9c9c9"
                  fillOpacity=".16"
                ></path>{" "}
                <path d="M12 19v4M12 1v4" strokeLinecap="round"></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="a">
                  {" "}
                  <path fill="#c9c9c9" d="M0 0h24v24H0z"></path>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
        )}
      </button>
    </div>
  );
}

export default ThemeSwitch;
