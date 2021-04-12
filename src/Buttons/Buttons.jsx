import React from "react";
import { createClassNames } from "../createClassNames";
import "./Buttons.scss";

const Button = ({
  classNames = [],
  size = "default",
  icon,
  disabled = false,
  children = "",
  onClick,
}) => {
  const cn = createClassNames("Button", `Button--${size}`, ...classNames);
  return (
    <button className={cn} onClick={onClick} disabled={disabled}>
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
};

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {"default"|"compact"|"large"} [props.size]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */
const SolidButton = ({
  classNames = [],
  size = "default",
  icon = false,
  disabled = false,
  children = "",
  onClick,
}) => {
  return (
    <Button
      classNames={["SolidButton", ...classNames]}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  );
};

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {"default"|"compact"|"large"} [props.size]
 * @param {"accent"|"primary"} [props.textColor]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.outlined]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */
const FlatButton = ({
  classNames = [],
  size = "default",
  textColor = "accent",
  icon,
  disabled = false,
  outlined = false,
  children = "",
  onClick,
}) => {
  return (
    <Button
      classNames={[
        "FlatButton",
        ...classNames,
        `FlatButton--${textColor}-text-color`,
        `${outlined ? "FlatButton--outlined" : ""}`,
      ]}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  );
};

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {"default"|"compact"|"large"} [props.size]
 * @param {any} [props.icon]
 * @param {boolean} [props.disabled]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */
const FloatingActionButton = ({
  classNames = [],
  size = "default",
  icon = false,
  disabled = false,
  children = "",
  onClick,
}) => {
  return (
    <Button
      classNames={["FloatingActionButton", ...classNames]}
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
