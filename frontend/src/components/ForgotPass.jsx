import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Maincontext } from "../context/Context";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const ForgotPass = () => {
  const { API_BASE_URL, SIGNUP_BASE_URL, openToast, credentials, fetchUser } =
    useContext(Maincontext);
  const navigate = useNavigate();

  const [Toggle, setToggle] = useState(false);

  const formsubmithandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const Cpassword = e.target.Cpassword.value;

    if (email != "" && password != "" && Cpassword != "") {
      if (password == Cpassword) {
        const ExistingUser = credentials.find((users) => users.email === email);
        if (ExistingUser) {
          if (password == ExistingUser.password) {
            openToast("You cannot pass your current password!", "error");
          } else {
            axios
              .put(
                API_BASE_URL +
                  SIGNUP_BASE_URL +
                  "/change-pass/" +
                  ExistingUser._id,
                {
                  password: password,
                }
              )
              .then((success) => {
                if (success.data.status == 1) {
                  fetchUser();
                  setTimeout(() => {
                    navigate("/login");
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
          openToast("Email does not exists", "error");
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
            Change your password
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3 px-6" onSubmit={formsubmithandler}>
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
                  Enter your new password
                </label>
              </div>
              <div className="mt-2 text-black bg-white flex items-center rounded-md">
                <input
                  id="password"
                  name="password"
                  type={Toggle == false ? "password" : "text"}
                  autoComplete="current-password"
                  required=""
                  placeholder="*****"
                  className="block w-full rounded-md bg-transparent  py-1.5   placeholder:text-gray-400 px-2 focus:outline-none sm:text-sm sm:leading-6"
                />
                {Toggle == false ? (
                  <FaEye
                    className="text-black mr-2 cursor-pointer"
                    size={20}
                    onClick={() => {
                      setToggle(!Toggle);
                    }}
                  />
                ) : (
                  <FaEyeSlash
                    className="text-black mr-2 cursor-pointer"
                    size={20}
                    onClick={() => {
                      setToggle(!Toggle);
                    }}
                  />
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Cpassword"
                  className="block text-sm font-medium leading-6 text-cyan-500"
                >
                  Confirm new password
                </label>
              </div>
              <div className="mt-2 text-black bg-white flex items-center rounded-md">
                <input
                  id="Cpassword"
                  name="Cpassword"
                  type={Toggle == false ? "password" : "text"}
                  required=""
                  placeholder="*****"
                  className="block w-full rounded-md bg-transparent  py-1.5   placeholder:text-gray-400 px-2 focus:outline-none sm:text-sm sm:leading-6"
                />
                {Toggle == false ? (
                  <FaEye
                    className="text-black mr-2 cursor-pointer"
                    size={20}
                    onClick={() => {
                      setToggle(!Toggle);
                    }}
                  />
                ) : (
                  <FaEyeSlash
                    className="text-black mr-2 cursor-pointer"
                    size={20}
                    onClick={() => {
                      setToggle(!Toggle);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Change password
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

export default ForgotPass;
