import React from "react";
import { classNames } from "../../utils/classNames";

const Button = ({
  children = "",
  classes = [],
  disabled = false,
  href,
  icon,
  onClick,
  outlined = false,
  rounded = false,
  size = "normal",
  variant = "accent",
  ...other
}) => {
  const cn = classNames(
    "Button",
    outlined && "Button-outlined",
    rounded && "Button-rounded",
    `Button-${size}`,
    `Button-${variant}`,
    ...classes
  );
  return React.createElement(
    href ? "a" : "button",
    {
      className: cn,
      onClick,
      disabled,
      href,
      ...other
    },
    icon,
    children && React.createElement("span", null, children)
  );
};

/**
 * Button with solid background
 * @param {object} props
 * @param {any} [props.children] button content
 * @param {string} [props.className] custom CSS class
 * @param {boolean} [props.disabled] make button disabled
 * @param {string} [props.href] URL of the link. make button render as <a> instead of <button>
 * @param {any} [props.icon] optional icon, rendered before content
 * @param {boolean} [props.rounded] make button rounded
 * @param {"normal"|"compact"|"large"} [props.size] button size
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] onClick callback
 */
const SolidButton = ({
  children = "",
  className,
  disabled = false,
  href,
  icon = false,
  onClick,
  rounded = false,
  size = "normal",
  variant = "accent",
  ...other
}) => {
  return (
    <Button
      classes={["SolidButton", className]}
      disabled={disabled}
      icon={icon}
      href={href}
      onClick={onClick}
      rounded={rounded}
      size={size}
      variant={variant}
      {...other}
    >
      {children}
    </Button>
  );
};

/**
 * Text Button with hover effect and optional outline
 * @param {object} props
 * @param {any} [props.children] button content
 * @param {string} [props.className] custom CSS class
 * @param {boolean} [props.disabled] make button disabled
 * @param {string} [props.href] URL of the link. make button render as <a> instead of <button>
 * @param {any} [props.icon] optional icon, rendered before content
 * @param {boolean} [props.outlined] make button outlined
 * @param {boolean} [props.rounded] make button rounded
 * @param {"normal"|"compact"|"large"} [props.size] button size
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] onClick callback
 */
const FlatButton = ({
  children = "",
  className,
  disabled = false,
  href,
  icon = false,
  onClick,
  outlined = false,
  rounded = false,
  size = "normal",
  variant = "accent",
  ...other
}) => {
  return (
    <Button
      classes={["FlatButton", className]}
      disabled={disabled}
      icon={icon}
      href={href}
      onClick={onClick}
      outlined={outlined}
      rounded={rounded}
      size={size}
      variant={variant}
      {...other}
    >
      {children}
    </Button>
  );
};

/**
 * A floating action button (FAB) represents the primary action of a screen.
 * {@link https://material.io/components/buttons-floating-action-button}
 * @param {object} props
 * @param {any} [props.children] button content
 * @param {string} [props.className] custom CSS class
 * @param {boolean} [props.disabled] make button disabled
 * @param {string} [props.href] URL of the link. make button render as <a> instead of <button>
 * @param {any} [props.icon] optional icon, rendered before content
 * @param {boolean} [props.outlined] make button outlined
 * @param {"normal"|"compact"|"large"} [props.size] button size
 * @param {"plain"|"soft"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] onClick callback
 */
const FloatingActionButton = ({
  children = "",
  className,
  disabled = false,
  href,
  icon = false,
  onClick,
  size = "normal",
  variant = "accent",
  ...other
}) => {
  return (
    <Button
      classes={["SolidButton", "FloatingActionButton", className]}
      disabled={disabled}
      icon={icon}
      href={href}
      onClick={onClick}
      size={size}
      variant={variant}
      {...other}
    >
      {children}
    </Button>
  );
};

export { SolidButton, FlatButton, FloatingActionButton };
