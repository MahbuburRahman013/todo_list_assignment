import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import HomePage from "../home_page/HomePage";
import Login from "../login_page/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Registration from "../registration_page/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/registration",
      element:<Registration></Registration>
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
  ]);

export default router;