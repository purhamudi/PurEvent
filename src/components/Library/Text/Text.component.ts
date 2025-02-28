import React, { type JSX } from "react";
import './Text.scss'; 

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  type?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
}

const Text: React.FC<TextProps> = ({ type = "p", children, variant = "primary", className = "", ...props }) => {
  const classNames = `text ${variant} ${type} ${className}`; 
  return React.createElement(type, { className: classNames, ...props }, children);
};

export default Text;
