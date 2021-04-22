import React from "react";
import { createClassNames } from "../../createClassNames";
import "./CheckBox.css";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {"primary"|"accent"|"danger"|"warning"|"success"} [props.variant]
 * @param {string} [props.label]
 * @param {"left"|"right"} [props.labelPosition]
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange]
 * @param {boolean} [props.disabled]
 */
const CheckBox = ({
  classNames = [],
  variant = "accent",
  label,
  labelPosition = "right",
  onChange,
  disabled = false
}) => {

  const cn = createClassNames(
    "CheckBox",
    `CheckBox--${variant}`,
    `CheckBox--${labelPosition}Label`,
    ...classNames
  );
  return (
    <label className={cn}>
      <input
        className="CheckBox__input"
        type="checkbox"
        onChange={onChange}
        disabled={disabled}
      />
      <span className="CheckBox__mark"></span>
      {label && <span className="CheckBox__label">{label}</span>}
    </label>
  );
};

export { CheckBox };
