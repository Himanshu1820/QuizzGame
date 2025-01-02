import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import Listing from "./components/Listing";
import Question from "./components/Question";
import Login from "./components/Login";

import Signup from "./components/Signup";
import Play from "./components/Play";

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
          path: "/play",
          element: <Play />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
