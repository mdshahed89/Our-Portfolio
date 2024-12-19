import AuthProvider from "@/AuthProvider/AuthProvider";

const layout = ({ children }) => {
  return (
    <div className="bg-[#035635]">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default layout;
