import { HTMLAttributes } from "react";

export function Button({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="text-base py-[.5em] px-[2em] border rounded-lg text-white bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
      {...props}
    >
      {children}
    </button>
  );
}
