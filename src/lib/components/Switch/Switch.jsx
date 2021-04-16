import React from "react";
import { createClassNames } from "../../createClassNames";
import "./Switch.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {boolean} props.checked
 * @param {any} [props.children]
 * @param {"normal"|"large"|"xlarge"} [props.size]
 * @param {function} props.onChange
 */
const Switch = ({
  classNames = [],
  checked,
  children,
  size = "normal",
  onChange,
}) => {
  const cn = createClassNames("Switch", `Switch--${size}`, ...classNames);
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
