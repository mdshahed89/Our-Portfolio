"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="h-[100vh] w-[100vw] bg-white flex items-center justify-center">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  // Return null while waiting for redirect
  return null;
};

export default PrivateRoute;
