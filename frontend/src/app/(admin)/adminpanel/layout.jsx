import Sidebar from "@/app/components/Sidebar";
import AuthProvider from "@/AuthProvider/AuthProvider";
import PrivateRoute from "@/AuthProvider/PrivateRoute";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen md:flex">
      <AuthProvider>
        <PrivateRoute>
          <div className="">
            <Sidebar></Sidebar>
          </div>
          <div className="flex-1 md:ml-64">{children}</div>
        </PrivateRoute>
      </AuthProvider>
    </div>
  );
};

export default Layout;
