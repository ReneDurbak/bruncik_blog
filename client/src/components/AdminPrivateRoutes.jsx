import React, { useId } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

export default function PrivateRoute() {
  const { adminInfo } = useSelector((state) => state.adminAuth);
  return adminInfo ? (
    <>
      <Helmet>
        <title>Admin</title>
        <link rel="icon" type="image/svg+xml" href="/adminmode.png" />
      </Helmet>
      <Outlet />
    </>
  ) : (
    <Navigate to="/admin" replace />
  );

  return <div></div>;
}
