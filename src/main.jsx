import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import TodoApp from "./components/todo/TodoApp.jsx";
import BookPage from "./pages/Book.jsx";
import LoginPage from "./pages/Login.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import RegisterPage from "./pages/Register.jsx";
import UserPage from "./pages/User.jsx";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "books",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
