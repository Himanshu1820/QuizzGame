import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Maincontext } from "../context/Context";
import axios from "axios";

const Signup = () => {
  const {
    API_BASE_URL,
    SIGNUP_BASE_URL,
    openToast,
    credentials,
    userLogin,
    fetchUser,
  } = useContext(Maincontext);
  const navigate = useNavigate();
  const formsubmithandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const Cpassword = e.target.Cpassword.value;

    if (name != "" && email != "" && password != "" && Cpassword != "") {
      if (password == Cpassword) {
        const ExistingUser = credentials.find((users) => users.email === email);
        if (ExistingUser) {
          openToast("Email already exists", "error");
        } else {
          axios
            .post(API_BASE_URL + SIGNUP_BASE_URL + "/create", {
              name: name,
              email: email,
              password: password,
            })
            .then((success) => {
              if (success.data.status == 1) {
                fetchUser();
                userLogin({
                  name: name,
                  email: email,
                  password: password,
                });
                setTimeout(() => {
                  navigate("/games");
                }, 500);
                openToast(success.data.msg, "success");
              } else {
                openToast(success.data.msg, "error");
              }
            })
            .catch((error) => {
              openToast("Client side error", "error");
              console.log(error.message);
            });
        }
      } else {
        openToast("Both passwords not matched", "error");
      }
    } else {
      openToast("Please fill all the fields", "error");
    }

    e.target.reset;
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
      <div className="shadow-inner shadow-cyan-500 w-[370px] mx-auto rounded-lg py-3 border border-cyan-400 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-cyan-500">
            Sign up to your account
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3 px-6" onSubmit={formsubmithandler}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-cyan-500"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required=""
                  placeholder="Enter your name here"
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                  required=""
                  placeholder="Enter your email here"
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required=""
                  placeholder="*****"
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Cpassword"
                  className="block text-sm font-medium leading-6 text-cyan-500"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="Cpassword"
                  name="Cpassword"
                  type="password"
                  required=""
                  placeholder="*****"
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
