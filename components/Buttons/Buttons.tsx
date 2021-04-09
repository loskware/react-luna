import React from "react";
import "./Buttons.scss";

interface ButtonProps {
  classNames?: string;
  size?: "default" | "compact" | "large";
  icon?: any;
  disabled?: boolean;
  children?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  classNames,
  size = "default",
  icon,
  disabled = false,
  children = "",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`Button Button--${size} ${classNames ?? ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
};

const SolidButton = ({
  classNames,
  size = "default",
  icon = false,
  disabled = false,
  children = "",
  onClick,
}: ButtonProps) => {
  return (
    <Button
      classNames={`SolidButton ${classNames ?? ""}`}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  );
};

const FloatingActionButton = ({
  classNames,
  size = "default",
  icon = false,
  disabled = false,
  children = "",
  onClick,
}: ButtonProps) => {
  return (
    <Button
      classNames={`FloatingActionButton ${classNames ?? ""}`}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  );
};

interface FlatButtonProps extends ButtonProps {
  outlined?: boolean;
}
const FlatButton = ({
  classNames,
  size = "default",
  icon,
  disabled = false,
  outlined = false,
  children = "",
  onClick,
}: FlatButtonProps) => {
  return (
    <Button
      classNames={`FlatButton ${classNames ?? ""} ${
        outlined ? "FlatButton--outlined" : ""
      }`}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  );
};

export { SolidButton, FlatButton, FloatingActionButton };
