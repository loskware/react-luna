import React, { useEffect, useRef } from "react";
import { createClassNames } from "../../createClassNames";
import "./CheckBox.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {boolean|null} props.checked
 * @param {string} [props.label]
 * @param {"left"|"right"} [props.labelPosition]
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange]
 */
const CheckBox = ({
  classNames = [],
  checked = false,
  label,
  labelPosition = "right",
  onChange,
}) => {
  const cbRef = useRef();

  useEffect(() => {
    const cb = cbRef.current;
    if (cb) {
      cb.checked = checked;
      cb.indeterminate = checked === null;
    }
  }, [checked])

  const cn = createClassNames(
    "CheckBox",
    `CheckBox--${labelPosition}Label`,
    ...classNames
  );
  return (
    <label className={cn}>
      <input
        type="checkbox"
        ref={cbRef}
        onChange={onChange}
      />
      <span className="CheckBox__mark"></span>
      {label && <span className="CheckBox__label">{label}</span>}
    </label>
  );
};

export { CheckBox };
