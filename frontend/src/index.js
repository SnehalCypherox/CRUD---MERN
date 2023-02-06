import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import CreateStudentComponent from "./components/CreateStudentComponent";
import StudentList from "./components/StudentList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "create-student",
    element: (
      <>
        <Navbar />
        <CreateStudentComponent />
      </>
    ),
  },
  {
    path: "student-list",
    element: (
      <>
        <Navbar />
        <StudentList />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
