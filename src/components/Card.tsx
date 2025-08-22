import type React from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <>
      <div className={`bg ${className}`}>Card</div>
      {children}
    </>
  );
}

export default Card;
