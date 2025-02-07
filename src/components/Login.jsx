import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/authService";
import { login as loginUser } from "../features/authSlice";
import Input from "./Input";
import Button from "./Button";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
<<<<<<< HEAD
    setError(null);
    try {
      const user = await authService.loginUser(data);
      if (user) {
        const session = await authService.getCurrentUser();
        if (session) {
          dispatch(loginUser(session));
          navigate("/");
        }
      } else {
        setError("Invalid credentials...");
=======
    setError("");
    try {
      const session = await authService.loginUser(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
>>>>>>> main
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form
        onSubmit={handleSubmit(login)}
        className="card-bg border mt-14 rounded-sm"
      >
        <div className="flex flex-col items-baseline justify-around px-14 py-10 gap-8 w-md">
          <div className="">
            <h2 className="text-primary text-2xl font-light w-full">
              Sign in to your account
            </h2>
            <p className="text-secondary font-light">
              Don't have any account?{" "}
              <span>
                <Link
                  to={"/signup"}
                  className="text-gray-500 cursor-pointer font-normal hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-400 underline"
                >
                  Sign up
                </Link>
              </span>
            </p>
          </div>
          {error !== null ? (
            <div className="text-red-600 dark:text-red-400">{error}</div>
          ) : null}
          <div className="flex flex-col items-baseline justify-between gap-5 w-full">
            <div className="w-full">
              <Input
                label={"Email: "}
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                        value
                      ) || "Email address must be  a valid address",
                  },
                })}
              />
            </div>
            <div className="w-full">
              <Input
                label={"Password: "}
                type="password"
                placeholder="Password"
                className=""
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <Button className="w-full mt-5" text="Login" type="submit" />
          </div>{" "}
        </div>
      </form>
    </div>
  );
}

export default Login;
