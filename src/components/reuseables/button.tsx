"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

type Button = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, className, ...props }: Button) => {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      disabled={pending}
      className={twMerge(
        `${
          pending && "cursor-not-allowed opacity-70"
        } text-white bg-black rounded-lg py-3 px-5 w-fit`,
        className
      )}
    >
      {pending ? "Please wait..." : children}
    </button>
  );
};
