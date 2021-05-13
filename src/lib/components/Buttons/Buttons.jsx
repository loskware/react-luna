import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef ButtonProps
 * @property {boolean} [outlined] make button outlined
 * @property {boolean} [rounded] make button rounded
 * @property {boolean} [solid] make button solid
 * @property {"normal"|"compact"|"large"} [size] button size
 * @property {"plain"|"soft"|"accent"|"danger"|"warning"|"success"} [theme] color variant
 */

/**
 * @param {ButtonProps & React.ComponentPropsWithoutRef<"button">} props
 */
const Button = ({
  className,
  outlined = false,
  rounded = false,
  solid = false,
  size = "normal",
  theme = "accent",
  ...other
}) => {
  const { children, disabled } = other;

  const cn = classNames(
    "Button",
    outlined && !solid && "Button-outlined",
    rounded && "Button-rounded",
    solid ? "Button-solid" : "Button-flat",
    `Button-${size}`,
    `Button-${theme}`,
    className
  );

  return (
    <button className={cn} disabled={disabled} {...other}>
      {children}
    </button>
  );
};

/**
 * @param {ButtonProps & React.ComponentPropsWithoutRef<"a">} props
 */
const LinkButton = ({
  className,
  outlined = false,
  rounded = false,
  solid = false,
  size = "normal",
  theme = "accent",
  ...other
}) => {
  const cn = classNames(
    "Button",
    outlined && !solid && "Button-outlined",
    rounded && "Button-rounded",
    solid ? "Button-solid" : "Button-flat",
    `Button-${size}`,
    `Button-${theme}`,
    className
  );

  return (
    <a className={cn} {...other}>
      {other.children}
    </a>
  );
};

export { Button, LinkButton };
