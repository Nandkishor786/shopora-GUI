import React from "react";

const Button = ({ type = "button", text, onClick }) => {
  return (
    <button onClick={onClick} type={type} className="bg-[#e60000] p-3 w-full text-white text-lg text-center font-medium">
      {text}
    </button>
  );
};

export default Button;
