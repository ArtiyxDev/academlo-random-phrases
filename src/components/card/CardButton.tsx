import type React from "react";

interface CardButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

function CardButton({ children, onClick, className = "" }: CardButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg bg-blue-500 px-4 py-2 text-white ${className}`}
        >
            {children}
        </button>
    );
}

export default CardButton;
