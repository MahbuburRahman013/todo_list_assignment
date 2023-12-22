import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextProvider } from "../auth/AuthProvider";


const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(ContextProvider);
   const location = useLocation()
   

   if (loading) {
      return <div className="flex h-[70vh] justify-center items-center"><CircularProgress /></div>
   }

   if (!user) {
      return <Navigate state={location.pathname} to='/login'></Navigate>
   }


   return children
};

export default PrivateRoute;


