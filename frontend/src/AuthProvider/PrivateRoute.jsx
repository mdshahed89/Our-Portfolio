"use client";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { redirect } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading & !user) {
    return (
      <>
        <div className="flex justify-center min-h-screen items-center">
          Loading..
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }

  return redirect("/login");
};

export default PrivateRoute;
