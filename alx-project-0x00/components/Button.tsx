import React from "react";

type ButtonProps = {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  styles?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ title, size, shape, styles }) => {
  const sizeClasses = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-6 text-md",
    large: "py-4 px-8 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  const buttonClass = `${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white`;

  return (
    <button className={buttonClass} style={styles}>
      {title}
    </button>
  );
};

export default Button;

