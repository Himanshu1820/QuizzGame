import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Maincontext } from "../context/Context";

const Games = () => {
  const { settype, user } = useContext(Maincontext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div className="h-full p-10 flex justify-center items-center">
      <div className="border p-3 rounded-xl w-[450px] flex justify-center items-center text-white text-xl">
        <div className=" p-3 flex flex-col gap-5">
          <h2>Choose the game you want to play: </h2>

          <div className="flex gap-10 justify-center mt-5">
            <Link to={"/precautions"}>
              <button
                onClick={() => {
                  settype("Geo");
                }}
                className="px-2 py-1 gameButton"
              >
                GeoGuesser
                <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
              </button>
            </Link>

            <Link to={"/precautions"}>
              <button
                onClick={() => {
                  settype("Quizz");
                }}
                className="px-2 py-1 gameButton"
              >
                QuizzGame
                <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
