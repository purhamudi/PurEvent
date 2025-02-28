import React from "react";
// import './Text.scss'; 

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
//   type?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className = "", ...props }) => {
  const classNames = `button ${variant} ${className}`; 
  return React.createElement('button', { className: classNames, ...props }, children);
};

export default Button;
