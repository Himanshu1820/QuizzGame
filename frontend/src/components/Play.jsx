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

  return (
    <div className="text-cyan-500">
      <h1 className="text-4xl text-center">Play</h1>
      <div className="max-w-[600px] shadow shadow-cyan-500 rounded-lg p-6 mt-12 mx-auto">
        {result == null ? (
          <>
            {/* card starts */}
            <Card
              ques={question[current]}
              current={current}
              userAns={userAns}
              answers={answers}
            />
            {/* card ends */}
            <div className="flex justify-between ">
              <button
                className={`bg-cyan-500 text-black p-1 disabled:bg-cyan-500/50 rounded shadow-inner shadow-black text-xl hover:bg-cyan-400`}
                onClick={prev}
              >
                Prev
              </button>
              {current == question.length - 1 ? (
                <button
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

const Card = ({ ques, current, userAns, answers }) => {
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
        {current + 1}) {ques?.ques}
      </div>

      <div
        className={`shadow shadow-lime-500 px-2 py-1 text-xl m-2 hover:bg-lime-500 hover:text-black cursor-pointer rounded-lg
           ${ans == "A" ? "bg-lime-500 text-black" : ""} `}
        onClick={() => {
          setans("A");
          userAns("A");
        }}
      >
        A) {ques?.optA}
      </div>
      <div
        className={`shadow shadow-lime-500 px-2 py-1 text-xl m-2 hover:bg-lime-500 hover:text-black cursor-pointer rounded-lg
           ${ans == "B" ? "bg-lime-500 text-black" : ""} `}
        onClick={() => {
          setans("B");
          userAns("B");
        }}
      >
        {" "}
        B) {ques?.optB}
      </div>
      <div
        className={`shadow shadow-lime-500 px-2 py-1 text-xl m-2 hover:bg-lime-500 hover:text-black cursor-pointer rounded-lg
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
        className={`shadow shadow-lime-500 px-2 py-1 text-xl m-2 hover:bg-lime-500 hover:text-black cursor-pointer rounded-lg
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
  );
};
