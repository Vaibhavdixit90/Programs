"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email === "Vaibhav.d@flowautomate.com" && password === "1234@") {
      router.replace("/programs"); // Redirect to /programs if authenticated
    } else {
      router.replace("/sign-in"); // Redirect to /sign-in if not authenticated
    }
  }, []);

  return null;
}
