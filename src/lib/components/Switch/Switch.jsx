import React from "react";
import { classNames } from "../../classNames";

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {boolean} props.checked
 * @param {any} [props.children]
 * @param {"normal"|"large"|"xlarge"} [props.size]
 * @param {function} props.onChange
 */
const Switch = ({
  classes = [],
  checked,
  children,
  size = "normal",
  onChange,
}) => {
  const cn = classNames("Switch", `Switch--${size}`, ...classes);
  return (
    <label className={cn}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked, e)}
      />
      <span className="Switch__track"></span>
      <span className="Switch__slider">{children}</span>
    </label>
  );
};

export { Switch };
