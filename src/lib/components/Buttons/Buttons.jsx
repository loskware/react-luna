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
  size = "normal",
  variant = "accent",
  ...other
}) => {
  const cn = classNames(
    "Button",
    outlined && `Button-outlined`,
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
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {boolean} [props.disabled] make button disabled
 * @param {string} [props.href] URL of the link. make button render as <a> instead of <button>
 * @param {any} [props.icon] optional icon, rendered before content
 * @param {"normal"|"compact"|"large"} [props.size] button size
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] onClick callback
 */
const SolidButton = ({
  children = "",
  classes = [],
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
      classes={["SolidButton", ...classes]}
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

/**
 * Text Button with hover effect and optional outline
 * @param {object} props
 * @param {any} [props.children] button content
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {boolean} [props.disabled] make button disabled
 * @param {string} [props.href] URL of the link. make button render as <a> instead of <button>
 * @param {any} [props.icon] optional icon, rendered before content
 * @param {boolean} [props.outlined] make button outlined
 * @param {"normal"|"compact"|"large"} [props.size] button size
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] onClick callback
 */
const FlatButton = ({
  children = "",
  classes = [],
  disabled = false,
  href,
  icon = false,
  onClick,
  outlined = false,
  size = "normal",
  variant = "accent",
  ...other
}) => {
  return (
    <Button
      classes={["FlatButton", ...classes]}
      disabled={disabled}
      icon={icon}
      href={href}
      onClick={onClick}
      outlined={outlined}
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
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {boolean} [props.disabled] make button disabled
 * @param {string} [props.href] URL of the link. make button render as <a> instead of <button>
 * @param {any} [props.icon] optional icon, rendered before content
 * @param {boolean} [props.outlined] make button outlined
 * @param {"normal"|"compact"|"large"} [props.size] button size
 * @param {"plain"|"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] onClick callback
 */
const FloatingActionButton = ({
  children = "",
  classes = [],
  disabled = false,
  href,
  icon = false,
  onClick,
  size = "normal",
  variant = "accent",
  ...other
}) => {
  return (
    <SolidButton
      classes={["FloatingActionButton", ...classes]}
      disabled={disabled}
      icon={icon}
      href={href}
      onClick={onClick}
      size={size}
      variant={variant}
      {...other}
    >
      {children}
    </SolidButton>
  );
};

export { SolidButton, FlatButton, FloatingActionButton };
