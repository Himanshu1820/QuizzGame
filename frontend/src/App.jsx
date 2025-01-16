import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import Listing from "./components/Listing";
import Question from "./components/Question";
import Login from "./components/Login";

import Signup from "./components/Signup";
import Play from "./components/Play";
import Precautions from "./components/Precautions";
import Games from "./components/Games";
import ForgotPass from "./components/ForgotPass";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <Listing />,
        },
        {
          path: "/ques",
          element: <Question />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/forgot",
          element: <ForgotPass />,
        },
        {
          path: "/play",
          element: <Play />,
        },
        {
          path: "/precautions",
          element: <Precautions />,
        },
        {
          path: "/games",
          element: <Games />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
