import React from "react";

const Button = ({
  type = "button",
  children,
  onClick,

  loading = false,
  disabled = false,

  classname = "bg-[#e60000] text-white rounded-md p-3",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={`
        ${classname}
          w-full text-lg text-center font-medium
        transition-all duration-300

        ${
          disabled || loading
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer hover:opacity-90"
        }
      `}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
