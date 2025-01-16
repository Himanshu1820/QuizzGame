import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Maincontext } from "../context/Context";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedBones } from "react-icons/gi";

const Header = () => {
  const { user, logout, question, setlistRender, setquesRender, settype } =
    useContext(Maincontext);

  const [OpenMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const Questionrenderhandler = (link) => {
    if (link == "Geo") {
      navigate("/ques");

      setquesRender(link);
    } else if (link == "Quizz") {
      setquesRender(link);

      navigate("/ques");
    }
  };

  const listrenderhandler = (link) => {
    if (link == "GeoGuesser") {
      settype("Geo");
      setlistRender(question);
      navigate("/");
    } else if (link == "QuizzGame") {
      settype("Quizz");
      setlistRender(question);
      navigate("/");
    }
  };

  return (
    <header className="max-w-full shadow-lg shadow-cyan-500/50 p-3 text-cyan-500 mb-6">
      <nav className="flex max-w-[1200px] mx-auto justify-between items-center">
        <div className="text-3xl font-bold">Quizz</div>

        {/* header */}
        <ul className="xs:hidden sm:flex font-medium gap-5">
          {user == null ? (
            <>
              <li className="hover:text-cyan-300 hover:underline px-2 py-1 cursor-pointer">
                <select
                  name="listing"
                  id="listing"
                  className="bg-transparent cursor-pointer rounded py-2"
                  onChange={(e) => {
                    listrenderhandler(e.target.value);
                  }}
                >
                  <option
                    className="bg-black rounded"
                    selected
                    disabled={true}
                    hidden={true}
                  >
                    Listing
                  </option>
                  <option value="GeoGuesser" className="bg-black rounded">
                    GeoGuesser
                  </option>
                  <option value="QuizzGame" className="bg-black  rounded">
                    QuizzGame
                  </option>
                </select>
              </li>

              <li className="hover:text-cyan-300 hover:underline p-2">
                <Link to={"/login"}>Login</Link>
              </li>
              <li className="hover:text-cyan-300 hover:underline p-2">
                <Link to={"/signup"}>Signup</Link>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-cyan-300 hover:underline p-2 cursor-pointer">
                <select
                  name="Questioning"
                  id="Questioning"
                  className="bg-transparent cursor-pointer rounded"
                  onChange={(e) => {
                    Questionrenderhandler(e.target.value);
                  }}
                >
                  <option
                    className="bg-black rounded"
                    selected
                    disabled={true}
                    hidden={true}
                  >
                    Questioning
                  </option>
                  <option value="Geo" className="bg-black rounded">
                    Geo Question
                  </option>
                  <option value="Quizz" className="bg-black  rounded">
                    Quizz Question
                  </option>
                </select>
              </li>
              <li
                className=" cursor-pointer hover:text-cyan-300 hover:underline p-2"
                onClick={logout}
              >
                Logout
              </li>
              <li className="hover:text-cyan-300 hover:underline p-2">
                <Link to={"/play"}>Play</Link>
              </li>
            </>
          )}
        </ul>

        <span
          className="xs:block sm:hidden z-20 cursor-pointer text-white bg-black p-1 rounded"
          onClick={() => {
            setOpenMenu(!OpenMenu);
          }}
        >
          {OpenMenu == false ? (
            <GiHamburgerMenu size={25} />
          ) : (
            <GiCrossedBones size={25} />
          )}
        </span>

        {/* mobile menu side bar */}
        <div
          style={{
            background: "rgba(255,255,255,.7)",
            transform:
              OpenMenu == false ? "translateX(-100%)" : "translateX(0%)",
          }}
          className="absolute sm:hidden z-10 h-screen w-full top-0 left-0 duration-200"
        >
          <ul className="w-[40%] h-full pt-2 px-2 flex flex-col text-xl bg-black text-black font-medium gap-2">
            {user == null ? (
              <>
                <li className="hover:text-cyan-300 hover:underline p-2 cursor-pointer bg-blue-600 rounded-md">
                  <select
                    name="listing"
                    id="listing"
                    className="bg-transparent cursor-pointer rounded"
                    onChange={(e) => {
                      listrenderhandler(e.target.value);
                      setOpenMenu(!OpenMenu);
                    }}
                  >
                    <option
                      className="bg-black rounded"
                      selected
                      disabled={true}
                      hidden={true}
                    >
                      Listing
                    </option>
                    <option value="GeoGuesser" className="bg-black rounded">
                      GeoGuesser
                    </option>
                    <option value="QuizzGame" className="bg-black  rounded">
                      QuizzGame
                    </option>
                  </select>
                </li>

                <li
                  className="hover:text-cyan-300 hover:underline px-2 py-1 cursor-pointer bg-blue-600 rounded-md"
                  onClick={() => {
                    setOpenMenu(!OpenMenu);
                  }}
                >
                  <Link to={"/login"}>Login</Link>
                </li>
                <li
                  className="hover:text-cyan-300 hover:underline px-2 py-1 cursor-pointer bg-blue-600 rounded-md"
                  onClick={() => {
                    setOpenMenu(!OpenMenu);
                  }}
                >
                  <Link to={"/signup"}>Signup</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-cyan-300 hover:underline px-2 py-1 cursor-pointer bg-blue-600 rounded-md">
                  <select
                    name="Questioning"
                    id="Questioning"
                    className="bg-transparent cursor-pointer rounded"
                    onChange={(e) => {
                      Questionrenderhandler(e.target.value);
                      setOpenMenu(!OpenMenu);
                    }}
                  >
                    <option
                      className="bg-black rounded"
                      selected
                      disabled={true}
                      hidden={true}
                    >
                      Questioning
                    </option>
                    <option value="Geo" className="bg-black rounded">
                      Geo Question
                    </option>
                    <option value="Quizz" className="bg-black  rounded">
                      Quizz Question
                    </option>
                  </select>
                </li>
                <li
                  className="hover:text-cyan-300 hover:underline px-2 py-1 cursor-pointer bg-blue-600 rounded-md"
                  onClick={() => {
                    logout();
                    setOpenMenu(!OpenMenu);
                  }}
                >
                  Logout
                </li>
                <li
                  className="hover:text-cyan-300 hover:underline px-2 py-1 cursor-pointer bg-blue-600 rounded-md"
                  onClick={() => {
                    setOpenMenu(!OpenMenu);
                  }}
                >
                  <Link to={"/play"}>Play</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
