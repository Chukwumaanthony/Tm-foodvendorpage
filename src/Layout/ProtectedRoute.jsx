/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let isAuthorized = false;
  let userDetails = sessionStorage.getItem("vendorDetails");

  if (userDetails) {
    isAuthorized = true;
  }
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
