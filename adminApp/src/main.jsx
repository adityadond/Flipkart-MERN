import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  //<Route path="/" Component={<Home />} />
  {
    path: "/signin",
    element: <SignIn />,
  },
  //<Route path="/signin" component={<SignIn />} />
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
