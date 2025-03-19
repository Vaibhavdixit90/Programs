"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://dev.guruatmananda.org/wp-json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", data.token);
        toast.success("Login Successful! Redirecting...", {
          position: "top-right",
        });

        setTimeout(() => {
          router.push("/programs");
        }, 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch {
      toast.error("The email address or password you entered isn't correct", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen py-10  sm:py-16 lg:py-24">
      <ToastContainer />
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
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-blue-600 hover:underline hover:text-blue-700"
                >
                  Create Now
                </Link>
              </p>
            </div>

            <form
              onSubmit={handleSignIn}
              className="mt-8 flex flex-col items-center justify-center"
            >
              <div className="space-y-5 w-full">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      className="block w-full p-3 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <Link
                      href="/reset-password"
                      className="text-sm text-rose-500 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="block w-full p-3 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-4 text-base font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-md cursor-pointer"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Log in"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
