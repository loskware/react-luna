import React from "react";
import { classNames } from "../../utils/classNames";

const Typography = ({ children, className, tag, ...other }) => {
  console.log(other);
  return React.createElement(
    tag,
    {
      className,
      ...other,
    },
    children
  );
};

/**
 * @typedef TextProps
 * @property {string} [className]
 * @property {React.ReactNode} children
 * @property {"accent"|"error"|"warning"|"success"|"primary"|"secondary"|"tertiary"|"inverse"} [color]
 * @property {React.CSSProperties} [style]
 * @property {string} [tag]
 * @property {"normal"|"bold"|"bolder"|"lighter"|number|"initial"|"inherit"} [weight]
 */

/** @param {TextProps} props */
const Text = ({
  className,
  children,
  color,
  style,
  tag = "p",
  weight,
  ...other
}) => {
  const cn = classNames(
    "Text",
    color && `Text-${color}`,
    weight && `Text-${weight}`,
    className
  );
  return (
    <Typography tag={tag} className={cn} style={style} {...other}>
      {children}
    </Typography>
  );
};

/** @param {TextProps} props */
const Header = ({
  className,
  children,
  color,
  style,
  tag = "h2",
  weight,
  ...other
}) => {
  const cn = classNames(
    "Header",
    color && `Header-${color}`,
    weight && `Header-${weight}`,
    className
  );
  return (
    <Typography tag={tag} className={cn} style={style} {...other}>
      {children}
    </Typography>
  );
};

export { Text, Header };
