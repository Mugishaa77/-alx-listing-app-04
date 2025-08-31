import React from "react";

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition 
        ${isActive ? "bg-red-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
