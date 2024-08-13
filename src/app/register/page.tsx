"use client";
import imageUpload from "@/api/imageUp/ImageUp";
import { useCreateUserMutation } from "@/Redux/features/Auth/authApi";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [registerError, setRegisterError] = useState("");
  const [createUser] = useCreateUserMutation();

  const handelForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fastName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.password_confirmation.value;
    const photoFile = form.imgUrl.files[0];

    setRegisterError("");
    if (password.length < 6) {
      return toast("Password must be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return toast("Password must be a Uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return toast("Password must be a Lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      return toast("Password must be a number ");
    }
    if (!(password == confirmPassword)) {
      return toast("password or confirmPassword not equal ");
    }
    try {
      const image = await imageUpload(photoFile);
      console.log(image);
      const userCreate = await createUser(ok);
      //  const imageUrl=image.
      // const result = await register(email, password);
    } catch (error) {
      setRegisterError((error as any).message);
    }
  };
  return (
    <div className=" mt-4 min-h-screen">
      <div className="w-60 h-full">
        <Link href={"/"}>
          <Image
            src="https://i.ibb.co/xzg7M5N/Thyrocare.webp"
            alt="Thyrocare Image"
            layout="responsive"
            width={500}
            height={300}
          />
        </Link>
      </div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen ">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div>
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                  Create Your Account
                </h1>
              </div>

              <form
                onSubmit={handelForm}
                className="mt-8 grid grid-cols-6 gap-6 "
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <div className="relative  border rounded">
                    <input
                      type="text"
                      name="firstName"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3 ">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <div className="relative  border rounded">
                    <input
                      type="text"
                      name="lastName"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <div className="relative border rounded">
                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                      required
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <div className="relative  border rounded">
                    <input
                      type="password"
                      name="password"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <div className="relative  border rounded">
                    <input
                      type="password"
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password_confirmation"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Image{" "}
                  </label>

                  <div className="relative border rounded">
                    <input
                      type="file"
                      name="imgUrl"
                      className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link href="/login" className="text-gray-700 underline">
                      Log in
                    </Link>
                  </p>
                </div>
              </form>
              <div className="text-red-400 text-center my-4">
                {registerError}
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
