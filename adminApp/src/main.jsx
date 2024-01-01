import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import { Provider } from "react-redux";
import store from "../src/components/store/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Define the route for the root path "/" as exact
    exact: true,
  },
  {
    path: "/signin",
    element: <SignIn />,
    // Define the route for "/signin" as exact
    exact: true,
  },
  {
    path: "/signup",
    element: <SignUp />,
    // Define the route for "/signup" as exact
    exact: true,
  },
]);

window.store = store;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  </Provider>
);
