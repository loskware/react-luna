import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef SwitchProps
 * @property {"compact"|"normal"|"large"} [size] switch size
 * @property {"accent"|"danger"|"warning"|"success"} [variant] color variant
 */

/**
 * A luna-styled Switch
 * @param {SwitchProps & React.ComponentPropsWithoutRef<"input">} props
 */
export const Switch = (props) => {
  const {
    className,
    size = "normal",
    variant = "accent",
    ...other
  } = props;

  const cn = classNames(
    "Switch",
    `Switch-${size}`,
    `Switch-${variant}`,
    className
  );

  return (
    <label className={cn}>
      <input
        type="checkbox"
        {...other}
      />
      <span></span>
    </label>
  );
};
