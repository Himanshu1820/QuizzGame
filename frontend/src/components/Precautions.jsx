import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Maincontext } from "../context/Context";

const Precautions = () => {
  const { user, remember, setremember } = useContext(Maincontext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="bg-black h-full w-screen p-4 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-black mb-4">
          Game Instructions
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Follow these steps to play the game. Make sure to read carefully for
          the best experience!
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm md:text-base">
          <li>You will be shown few questions for 10 marks each.</li>
          <li>You have to guess the correct answer by choosing the option.</li>
          <li>
            After reaching the end, double-click on the finish button to end the
            game.
          </li>
          <li>
            The result of your performance will be revealed once you double
            click the finish button.
          </li>
          <li>Hit the play again button to play again.</li>
        </ol>
        <div className="mt-5">
          <form action="">
            <div className="flex items-center gap-2 my-3">
              <input
                type="checkbox"
                checked={remember === true}
                id="remember"
                name="remember"
                onChange={() => setremember(!remember)}
                className="w-4 h-4"
              />
              <label
                htmlFor="remember"
                className="cursor-pointer text-gray-600 text-xs md:text-sm"
              >
                Yes, I understand all the instructions.
              </label>
            </div>
            <div className="flex justify-center items-center">
              <Link to={"/play"}>
                <button
                  type="submit"
                  className="playbutton disabled:cursor-not-allowed px-6 py-2 rounded-md text-white disabled:bg-gray-400"
                  disabled={!remember}
                >
                  <span>PLAY NOW</span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Precautions;
