import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Maincontext } from "../context/Context";

const Header = () => {
  const { user, logout } = useContext(Maincontext);

  return (
    <header className="max-w-full shadow-lg shadow-cyan-500/50 p-3 text-cyan-500 mb-6">
      <nav className="flex max-w-[1200px] mx-auto justify-between items-center">
        <div className="text-3xl font-bold">Quizz</div>
        <ul className="flex font-medium gap-5">
          <li className="hover:text-cyan-300 hover:underline">
            <Link to={"/"}>Listing</Link>
          </li>
          <li className="hover:text-cyan-300 hover:underline">
            <Link to={"/ques"}>Questioning</Link>
          </li>

          {user == null ? (
            <li className="hover:text-cyan-300 hover:underline">
              <Link to={"/login"}>Login</Link>
            </li>
          ) : (
            <>
              <li
                className=" cursor-pointer hover:text-cyan-300 hover:underline "
                onClick={logout}
              >
                Logout
              </li>
              <li className="hover:text-cyan-300 hover:underline">
                <Link to={"/play"}>Play</Link>
              </li>
            </>
          )}
          <li className="hover:text-cyan-300 hover:underline">
            <Link to={"/signup"}>Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
