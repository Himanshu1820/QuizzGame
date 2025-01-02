import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Maincontext = createContext();
const Context = (props) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const QUES_BASE_URL = import.meta.env.VITE_QUES_BASE_URL;
  const SIGNUP_BASE_URL = import.meta.env.VITE_SIGNUP_BASE_URL;
  const LOGIN_BASE_URL = import.meta.env.VITE_LOGIN_BASE_URL;

  const [question, setquestion] = useState([]);
  const [user, setuser] = useState(null);
  const [credentials, setcredentials] = useState([]);
  const [current, setcurrent] = useState(0);
  const [answers, setanswers] = useState({});
  const [result, setresult] = useState(null);
  const [selectall, setselectall] = useState("");

  const openToast = (msg, flag) => {
    toast(msg, { type: flag });
  };

  const fetchQuestions = () => {
    axios
      .get(API_BASE_URL + QUES_BASE_URL)
      .then((success) => {
        if (success.data.status == 1) {
          setquestion(success.data.questions);
        } else {
          console.log(success.data.msg);
        }
      })
      .catch((err) => {
        console.log(err.data.msg);
      });
  };

  const fetchUser = () => {
    axios
      .get(API_BASE_URL + LOGIN_BASE_URL)
      .then((success) => {
        if (success.data.status == 1) {
          setcredentials(success.data.user);
        } else {
          openToast(success.data.msg, "error");
        }
      })
      .catch((error) => {
        openToast(error.data.msg, "error");
      });
  };

  const logout = () => {
    setuser(null);
    setanswers({});
    setcurrent(0);
    setresult(null);
    localStorage.removeItem("user");
    localStorage.removeItem("current");
    localStorage.removeItem("answers");
  };

  const userLogin = (user) => {
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    setuser(user);
  };

  const next = () => {
    if (current == question.length - 1) {
      return;
    }
    setcurrent(current + 1);
  };
  const prev = () => {
    if (current == 0) return;
    if (current == 1) localStorage.setItem("current", 0);
    setcurrent(current - 1);
  };

  const userAns = (ans) => {
    const a = { ...answers };
    a[current] = ans;
    setanswers(a);
  };

  const finish = () => {
    let marks = 0;
    for (let i = 0; i < question.length; i++) {
      if (question[i].answer == answers[i]) {
        marks++;
      }
    }
    setresult({
      marks,
      total: question.length,
    });
  };

  const playagain = () => {
    setresult(null);
    setcurrent(0);
    setanswers({});
  };

  useEffect(() => {
    if (current != 0) {
      localStorage.setItem("current", JSON.stringify(current));
    }
  }, [current]);

  useEffect(() => {
    if (Object.keys(answers).length != 0) {
      localStorage.setItem("answers", JSON.stringify(answers));
    }
  }, [answers]);

  useEffect(() => {
    fetchQuestions();
    fetchUser();
  }, []);

  useEffect(() => {
    const users = localStorage.getItem("user");
    if (users != null) {
      setuser(users);
    }

    const currentState = localStorage.getItem("current");
    if (currentState != null) {
      setcurrent(JSON.parse(currentState));
    }

    const userans = localStorage.getItem("answers");
    if (userans != null) {
      setanswers(JSON.parse(userans));
    }
  }, []);

  const TimeCalc = (timestamp) => {
    const date = new Date(timestamp);

    const d = date.toLocaleDateString();

    return d;
  };

  return (
    <Maincontext.Provider
      value={{
        openToast,
        API_BASE_URL,
        QUES_BASE_URL,
        SIGNUP_BASE_URL,
        fetchQuestions,
        question,
        TimeCalc,
        user,
        setuser,
        fetchUser,
        setcredentials,
        credentials,
        logout,
        next,
        prev,
        current,
        userLogin,
        userAns,
        answers,
        result,
        finish,
        playagain,
      }}
    >
      <ToastContainer className="z-[999999999999]" />
      {props.children}
    </Maincontext.Provider>
  );
};

export default Context;
export { Maincontext };
