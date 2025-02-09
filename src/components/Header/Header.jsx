import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import logo from "../../assets/logo.png";
import authService from "../../appwrite/authService";
import { logout } from "../../features/authSlice";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "Browse",
      path: "/browse",
      active: authStatus,
    },
    {
      name: "My Posts",
      path: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      path: "/add-post",
      active: authStatus,
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus,
    },
    {
      name: "Sign up",
      path: "/signup",
      active: !authStatus,
    },
  ];

  const logoutHandler = () => {
    setLoading(true);
    authService
      .logoutUser()
      .then(() => {
        dispatch(logout());
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <header className="primary w-full px-4 py-4 flex items-center justify-center">
      <nav className="flex items-center justify-between flex-wrap w-[85%] mr-14">
        <Link to={"/"}>
          <div className="flex items-end justify-center gap-2">
            <img src={logo} alt="logo" width={"50px"} className="mb-1" />
            <p className="text-gray-200 font-semibold text-2xl mb-2.5">
              Scribeo
            </p>
          </div>
        </Link>
        <div className="hidden md:flex flex-wrap items-center justify-between gap-5">
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
                    />
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          {authStatus ? (
            <Button
              text="Logout"
              bgColor=""
              hoverBgColor=""
              textColor="text-gray-100 dark:text-gray-200"
              className="hidden md:block relative bg-gray-900 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-900"
              onClick={() => logoutHandler()}
              loading={loading}
            />
          ) : null}
        </div>
        <HamburgerMenu
          logoutHandler={logoutHandler}
          authStatus={authStatus}
          navItems={navItems}
        />
      </nav>
    </header>
  );
}

export default Header;
