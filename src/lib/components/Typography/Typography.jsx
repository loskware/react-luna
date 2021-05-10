import React from "react";
import { classNames } from "../../utils/classNames";

const Typography = ({ children, className, tag, ...other }) => {
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
 * @property {string} [color]
 * @property {"accent"|"error"|"warning"|"success"|"primary"|"secondary"|"tertiary"|"inverse"} [theme]
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
  theme,
  weight,
  ...other
}) => {
  const cn = classNames(
    "Text",
    theme && `Text-${theme}`,
    weight && `Text-${weight}`,
    className
  );
  return (
    <Typography tag={tag} className={cn} style={{color, ...style}} {...other}>
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
  tag = "p",
  theme,
  weight,
  ...other
}) => {
  const cn = classNames(
    "Header",
    theme && `Header-${theme}`,
    weight && `Header-${weight}`,
    className
  );
  return (
    <Typography tag={tag} className={cn} style={{color, ...style}} {...other}>
      {children}
    </Typography>
  );
};

export { Text, Header };
