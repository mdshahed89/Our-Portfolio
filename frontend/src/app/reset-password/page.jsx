"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName.includes("/reset-password")) {
      router.push("/login");
    }
  }, [pathName, router]);

  return <div></div>;
};

export default Page;
