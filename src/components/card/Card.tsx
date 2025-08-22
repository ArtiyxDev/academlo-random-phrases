import type React from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <>
      <div className={`bg-stone-800 rounded-lg border border-gray-900 py-2 ${className}`}>
      {children}
      </div>
    </>
  );
}

export default Card;
