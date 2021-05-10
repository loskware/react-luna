import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef CheckBoxProps
 * @property {"plain"|"accent"|"danger"|"warning"|"success"} [variant] color variant
 */

/**
 * A luna-styled checkbox,
 * @param {CheckBoxProps & React.ComponentPropsWithoutRef<"input">} props
 */
export const CheckBox = (props) => {
  const { className, variant = "accent", ...other } = props;
  const cn = classNames("CheckBox", `CheckBox-${variant}`, className);
  return (
    <label className={cn}>
      <input className="CheckBox-input" type="checkbox" {...other} />
      <span className="CheckBox-mark"></span>
    </label>
  );
};
