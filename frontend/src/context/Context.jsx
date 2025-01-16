import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Maincontext = createContext();
const Context = (props) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const QUES_BASE_URL = import.meta.env.VITE_QUES_BASE_URL;
  const SIGNUP_BASE_URL = import.meta.env.VITE_SIGNUP_BASE_URL;
  const LOGIN_BASE_URL = import.meta.env.VITE_LOGIN_BASE_URL;

  const [question, setquestion] = useState([]);
  const [imgUrl, setimgUrl] = useState("");
  const [user, setuser] = useState(null);
  const [credentials, setcredentials] = useState([]);
  const [current, setcurrent] = useState(0);
  const [answers, setanswers] = useState({});
  const [result, setresult] = useState(null);
  const [selectall, setselectall] = useState("");
  const [remember, setremember] = useState(false);
  const [listRender, setlistRender] = useState([]);
  const [quesRender, setquesRender] = useState("");
  const [type, settype] = useState(""); // to call api for different collections in mongodb

  const openToast = (msg, flag) => {
    toast(msg, { type: flag });
  };

  const fetchQuestions = () => {
    axios
      .get(`${API_BASE_URL}${QUES_BASE_URL}?type=${type}`)
      .then((success) => {
        if (success.data.status == 1) {
          setquestion(success.data.questions);
          setlistRender(success.data.questions);
          setimgUrl(success.data.imgBaseUrl);
        } else {
          console.log(success.data.msg);
        }
      })
      .catch((err) => {
        console.log(err.data.msg);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, [type]);

  const fetchUser = () => {
    axios
      .get(API_BASE_URL + SIGNUP_BASE_URL)
      .then((success) => {
        if (success.data.status == 1) {
          setcredentials(success.data.users);
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
    setremember(false);
    settype("Geo");
    localStorage.removeItem("user");
    localStorage.removeItem("current");
    localStorage.removeItem("answers");
    localStorage.removeItem("remember");
    localStorage.removeItem("type");
  };

  const userLogin = (user) => {
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
      if (question[i].correctOpt == answers[i]) {
        marks++;
      }
    }
    setresult({
      marks: marks * 10,
      total: question.length * 10,
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
    if (remember != false) {
      localStorage.setItem("remember", JSON.stringify(remember));
    }
  }, [remember]);

  useEffect(() => {
    if (quesRender.length != 0) {
      localStorage.setItem("Questioning", JSON.stringify(quesRender));
    }
  }, [quesRender]);

  useEffect(() => {
    if (type != "") {
      localStorage.setItem("type", JSON.stringify(type));
    }
  }, [type]);

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
    const remem = localStorage.getItem("remember");
    if (remem != null) {
      setremember(JSON.parse(remem));
    }

    const questioning = localStorage.getItem("Questioning");
    if (questioning != null) {
      setquesRender(JSON.parse(questioning));
    }

    const Qtype = localStorage.getItem("type");
    if (Qtype != null) {
      settype(JSON.parse(Qtype));
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
        imgUrl,
        remember,
        setremember,
        listRender,
        setlistRender,
        quesRender,
        setquesRender,
        settype,
        type,
      }}
    >
      <ToastContainer className="z-[999999999999]" />
      {props.children}
    </Maincontext.Provider>
  );
};

export default Context;
export { Maincontext };
