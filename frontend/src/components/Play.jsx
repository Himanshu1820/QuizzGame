import React, { useContext, useEffect, useState } from "react";
import { Maincontext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const {
    user,
    fetchQuestions,
    question,
    current,
    prev,
    next,
    userAns,
    answers,
    result,
    finish,
    playagain,
    API_BASE_URL,
    imgUrl,
    remember,
    listRender,
    type,
  } = useContext(Maincontext);
  const navgate = useNavigate();

  useEffect(() => {
    fetchQuestions();
  }, []);
  useEffect(() => {
    if (user == null) {
      navgate("/login");
    }
  }, [user]);

  // useEffect(() => {
  //   if (remember != true) {
  //     navgate("/precautions");
  //   }
  // }, [remember]);

  return (
    <div className="text-cyan-500">
      <div className="text-center">
        <span className="text-2xl bg-gray-100 rounded-full py-1 px-4 text-black mx-auto">
          Welcome, {user?.name}
        </span>
      </div>
      <div className="max-w-[500px] shadow shadow-cyan-500 rounded-lg mt-4 mx-auto p-2">
        {result == null ? (
          <>
            {/* card starts */}
            <Card
              ques={listRender[current]}
              current={current}
              userAns={userAns}
              answers={answers}
              API_BASE_URL={API_BASE_URL}
              imgUrl={imgUrl}
              type={type}
            />
            {/* card ends */}
            <div className="flex justify-around ">
              <button
                className={`bg-cyan-500 text-black p-1 disabled:bg-cyan-500/50 rounded shadow-inner shadow-black text-xl hover:bg-cyan-400`}
                onClick={prev}
              >
                Prev
              </button>
              {current == question.length - 1 ? (
                <button
                  title="Double tap to finish the game"
                  className={`bg-cyan-500 text-black p-1 disabled:bg-cyan-500/50 rounded shadow-inner shadow-black text-xl hover:bg-cyan-400`}
                  onDoubleClick={finish}
                >
                  Finish
                </button>
              ) : (
                <button
                  className={`bg-cyan-500 text-black p-1 disabled:bg-cyan-500/50 rounded shadow-inner shadow-black text-xl hover:bg-cyan-400`}
                  onClick={next}
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="text-center text-3xl mb-4">Result</div>
            <div className="border py-2 border-lime-500 rounded-xl">
              <div className="text-xl border-b border-lime-500 p-2">
                Marks Obtained: {result.marks}
              </div>
              <div className="text-xl  p-2">Total: {result.total}</div>
            </div>

            <div className="text-center mt-5">
              <button
                onClick={playagain}
                className=" px-4 py-2 bg-lime-500 text-xl text-black shadow-inner shadow-black font-bold hover:bg-lime-400 rounded-lg "
              >
                Play Again
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Play;

const Card = ({
  ques,
  current,
  userAns,
  answers,
  API_BASE_URL,
  imgUrl,
  type,
}) => {
  const [ans, setans] = useState(null);

  useEffect(() => {
    if (answers[current] != undefined) {
      setans(answers[current]);
    } else {
      setans(null);
    }
  }, [current]);

  return (
    <div>
      <div className="text-xl shadow shadow-cyan-400 px-2 py-1 rounded-lg mb-5">
        {current + 1}){" "}
        {type == "Geo" ? (
          <div className="flex justify-center pb-4">
            <img
              src={API_BASE_URL + imgUrl + ques?.image}
              alt=""
              className="h-[200px] w-[300px]"
            />
          </div>
        ) : (
          ques?.question
        )}
      </div>

      <div className="grid grid-cols-12">
        <div
          className={`shadow shadow-lime-500 px-2 py-1 text-xl m-2 hover:bg-lime-500 hover:text-black cursor-pointer rounded-lg col-span-6
           ${ans == "A" ? "bg-lime-500 text-black" : ""} `}
          onClick={() => {
            setans("A");
            userAns("A");
          }}
        >
          A) {ques?.optA}
        </div>
        <div
          className={`shadow shadow-lime-500 px-2 py-1 text-xl m-2 hover:bg-lime-500 hover:text-black cursor-pointer rounded-lg col-span-6
           ${ans == "B" ? "bg-lime-500 text-black" : ""} `}
          onClick={() => {
            setans("B");
            userAns("B");
          }}
        >
          {" "}
          B) {ques?.optB}
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div
          className={`shadow shadow-lime-500 px-2 py-1 text-xl m-2 hover:bg-lime-500 hover:text-black cursor-pointer rounded-lg col-span-6
           ${ans == "C" ? "bg-lime-500 text-black" : ""} `}
          onClick={() => {
            setans("C");
            userAns("C");
          }}
        >
          {" "}
          C) {ques?.optC}
        </div>
        <div
          className={`shadow shadow-lime-500 px-2 py-1 text-xl m-2 hover:bg-lime-500 hover:text-black cursor-pointer rounded-lg col-span-6
           ${ans == "D" ? "bg-lime-500 text-black" : ""} `}
          onClick={() => {
            setans("D");
            userAns("D");
          }}
        >
          {" "}
          D) {ques?.optD}
        </div>
      </div>
    </div>
  );
};
