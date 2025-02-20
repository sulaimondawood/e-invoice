import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Button = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, className, ...props }: Button) => {
  return (
    <button
      {...props}
      className={twMerge(
        "text-white bg-black rounded-lg py-3 px-5 w-fit",
        className
      )}
    >
      {children}
    </button>
  );
};
