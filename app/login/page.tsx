import { Button } from "@/components/reuseables/button";
import React from "react";

const Login = () => {
  return (
    <div className="w-full px-4 h-screen flex items-center justify-center">
      <div className="p-6 w-full max-w-sm rounded-xl shadow-lg">
        <header>
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="">Enter your email to sign in to your account</p>
        </header>
        <div className="mt-6 w-full">
          <form className="w-full space-y-5">
            <div className="space-y-1 w-full">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="user@gmail.com"
                className="px-4 w-full rounded-lg border border-gray-600 h-10 outline-none focus:border-black focus:ring-1 ring-gray-200 placeholder:text-gray-500"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
