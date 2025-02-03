import React from "react";
import { useState } from "react";
import authService from "../appwrite/auth_service";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../features/authSlice";
import { Button, Input, Logo } from "./";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const createUser = async (data) => {
    console.log(data);
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold">
          Sign up to create an account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to={"/login"}
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(createUser)}>
          <div className="space-y-5">
            <Input labelText='Fullname: ' placeholder='Enter your fullname' {...register('password', {
              required: true,
            })}/>
            <Input labelText='Email: ' placeholder='Enter your email' type='email' {...register('email', {
              required: true,
              validate: {
                matchPattern: value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Email address must be  a valid address"
              }
            })} />
            <Input labelText='Password' placeholder='Enter your password' type='password' {...register('password'), {
              required: true,
              validate: {
                matchPattern: value => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) || 'Password must be of at least 8 characters and must contain at least one uppercase letter, one lowercase letter, one digit, one special character'
              }
            }}/>
            <Button type="submit" classname="w-full" children="Sign up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
