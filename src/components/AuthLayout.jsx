import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loading } from "./";

export default function AuthLayout({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? (
    <div className="w-full flex items-center justify-center">
      <Loading />
    </div>
  ) : (
    <>{children}</>
  );
}
