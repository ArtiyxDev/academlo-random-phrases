import type React from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <>
      <div
        className={`flex w-full max-w-xl min-w-2xs flex-col items-center justify-center gap-4 rounded-lg border border-gray-900 bg-stone-800 py-2 ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default Card;
