import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef RadioProps
 * @property {"plain"|"accent"|"danger"|"warning"|"success"} [variant] color variant
 */

/**
 * A luna-styled radio button,
 * @param {RadioProps & React.ComponentPropsWithoutRef<"input">} props
 */
export const Radio = (props) => {
  const { className, variant = "accent", ...other } = props;
  const cn = classNames("Radio", `Radio-${variant}`, className);
  return (
    <label className={cn}>
      <input className="Radio-input" type="radio" {...other} />
      <span className="Radio-mark"></span>
    </label>
  );
};
