"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName.includes("/reset-password")) {
      router.push("/login");
    }
  }, [pathName, router]);

  return <div></div>;
};

export default page;
