"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Invalid email address.");
      return;
    }

    setError("");

    try {
      const apiUrl =
        "https://dev.guruatmananda.org/wp-json/bts1/v1/forgot-password";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      };

      const response = await fetch(apiUrl, requestOptions);

      if (response.ok) {
        toast.success("Password reset link sent successfully to your email.");
        setTimeout(() => {
          router.push("/sign-in");
        }, 2000);
        setEmail("");
      } else {
        toast.error("Failed to send password reset link.");
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error("An error occurred while sending the request.");
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen py-10 sm:py-16 lg:py-24">
      <div className="absolute inset-0 hidden md:block">
        <Image
          className="object-cover"
          src="/SignUp.jpg"
          alt="Sign In Background"
          layout="fill"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gray-900/20"></div>

      <div className="relative flex items-center justify-center w-full max-w-lg px-4 sm:px-0 md:ml-auto md:mr-20">
        <div className="overflow-hidden bg-white rounded-md shadow-md w-full">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
              <p className="mt-2 text-base text-gray-600">
                Don’t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Create Now
                </Link>
              </p>
            </div>

            <form
              onSubmit={handleFormSubmit}
              className="mt-8 flex flex-col items-center justify-center"
            >
              <div className="space-y-5 w-full">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && (
                      <p className="mt-2 text-red-500 text-sm">{error}</p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 cursor-pointer"
                  >
                    Send Reset Link
                  </button>
                </div>
              </div>
            </form>
            <div className="absolute top-4 right-4">
              <ToastContainer position="top-right" autoClose={2000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
