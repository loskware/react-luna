import React from "react";
import { createClassNames } from "../../createClassNames";
import "./Buttons.css";

const Button = ({
  classNames = [],
  href,
  size = "normal",
  icon,
  disabled = false,
  children = "",
  onClick,
}) => {
  const cn = createClassNames("Button", `Button-${size}`, ...classNames);
  return React.createElement(
    href ? "a" : "button",
    {
      className: cn,
      onClick,
      disabled,
      href,
    },
    icon,
    children && React.createElement("span", null, children)
  );
};

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {"normal"|"compact"|"large"} [props.size]
 * @param {"primary"|"accent"|"danger"|"warning"|"success"} [props.variant]
 * @param {any} [props.icon]
 * @param {string} [props.href]
 * @param {boolean} [props.disabled]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */
const SolidButton = ({
  classNames = [],
  size = "normal",
  variant = "accent",
  icon = false,
  href,
  disabled = false,
  children = "",
  onClick,
}) => {
  return (
    <Button
      classNames={["SolidButton", `SolidButton-${variant}`, ...classNames]}
      disabled={disabled}
      icon={icon}
      href={href}
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
 * @param {"normal"|"compact"|"large"} [props.size]
 * @param {"primary"|"accent"|"danger"|"warning"|"success"} [props.variant]
 * @param {any} [props.icon]
 * @param {string} [props.href]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.outlined]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */
const FlatButton = ({
  classNames = [],
  size = "normal",
  variant = "accent",
  icon,
  href,
  disabled = false,
  outlined = false,
  children = "",
  onClick,
}) => {
  return (
    <Button
      classNames={[
        "FlatButton",
        `FlatButton-${variant}`,
        outlined && `FlatButton-outlined`,
        ...classNames,
      ]}
      disabled={disabled}
      icon={icon}
      href={href}
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
 * @param {"normal"|"compact"|"large"} [props.size]
 * @param {"primary"|"accent"|"danger"|"warning"|"success"} [props.variant]
 * @param {any} [props.icon]
 * @param {string} [props.href]
 * @param {boolean} [props.disabled]
 * @param {any} [props.children]
 * @param {function} [props.onClick]
 */
const FloatingActionButton = ({
  classNames = [],
  size = "normal",
  variant = "accent",
  icon = false,
  href,
  disabled = false,
  children = "",
  onClick,
}) => {
  return (
    <Button
      classNames={[
        "FloatingActionButton",
        "SolidButton",
        `SolidButton-${variant}`,
        ...classNames,
      ]}
      disabled={disabled}
      icon={icon}
      href={href}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  );
};

export { SolidButton, FlatButton, FloatingActionButton };
