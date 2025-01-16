import React, { useContext, useEffect, useState } from "react";
import { Maincontext } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { credentials, user, fetchUser, openToast, userLogin } =
    useContext(Maincontext);

  useEffect(() => {
    if (user != null) {
      navgate("/play");
    }
  }, []);

  const navgate = useNavigate();

  const formsubmithandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email != "" && password != "") {
      const validUser = credentials.find(
        (user) => user.email === email && user.password === password
      );
      if (validUser) {
        userLogin({
          name: validUser.name,
          email: validUser.email,
          password: validUser.password,
        });
        setTimeout(() => {
          navgate("/games");
        }, 500);
        openToast("Login Successfull", "success");
      } else {
        fetchUser();
        openToast("Invalid credentials", "error");
      }
    } else {
      openToast("Please fill the credentials first", "error");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="shadow-inner shadow-cyan-500 w-full max-w-xs sm:max-w-sm mx-auto rounded-lg py-4 border border-cyan-400">
        <div className="sm:mx-auto sm:max-w-sm">
          <h2 className="text-center text-xl sm:text-2xl font-bold leading-9 tracking-tight text-cyan-500">
            Login Here
          </h2>
        </div>
        <div className="mt-5 mx-auto px-4 sm:px-6">
          <form className="space-y-4" onSubmit={formsubmithandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-cyan-500"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email here"
                  className="block w-full rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-cyan-500"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to={"/forgot"}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="*****"
                  className="block w-full rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-5 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
