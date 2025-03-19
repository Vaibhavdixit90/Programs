"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const registrationResponse = await fetch(
        "https://dev.guruatmananda.org/wp-json/custom/v1/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      if (!registrationResponse.ok) {
        throw new Error("Registration failed");
      }
      const registrationData = await registrationResponse.json();

      const loginResponse = await fetch(
        "https://dev.guruatmananda.org/wp-json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.email,
            password: formData.password,
          }),
        }
      );

      if (!loginResponse.ok) {
        throw new Error("Login failed");
      }
      const loginData = await loginResponse.json();
      const token = loginData.token;

      localStorage.setItem("user", JSON.stringify(loginData));
      localStorage.setItem("token", token);

      await fetch(
        "https://dev.guruatmananda.org/wp-json/custom-user-meta/v1/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            user_id: registrationData.user_id,
            data: [
              { meta_key: "firstName", meta_value: formData.firstName },
              { meta_key: "lastName", meta_value: formData.lastName },
            ],
          }),
        }
      );

      toast.success("Signup successful! Redirecting to programs...");
      setTimeout(() => {
        router.push("/programs");
      }, 2000);
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="/SignUp.jpg"
          alt="Sign Up"
        />
      </div>
      <div className="absolute inset-0 bg-gray-900/20"></div>
      <div className="relative flex items-center justify-center w-full max-w-lg px-4 sm:px-0 md:ml-auto md:mr-20">
        <div className="overflow-hidden bg-white rounded-md shadow-md w-full">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Create an Account
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Login Now
                </Link>
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col items-center justify-center w-full"
            >
              <div className="space-y-5 w-full">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="text-base font-medium text-gray-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="mt-1 block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none"
                      required
                    />
                  </div>

                  <div className="w-1/2">
                    <label className="text-base font-medium text-gray-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="mt-1 block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-1 block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="mt-1 block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="mt-1 block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 cursor-pointer"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>

            {/* Toast Container */}
            <div className="absolute top-4 right-4">
              <ToastContainer position="top-right" autoClose={2000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
