import { createClassNames } from "../createClassNames";
import "./CheckBox.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {string} [props.label]
 * @param {"left"|"right"} [props.labelPosition]
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange]
 */
const CheckBox = ({
  classNames = [],
  label,
  labelPosition = "right",
  onChange,
}) => {
  const cn = createClassNames(
    "CheckBox",
    `CheckBox--${labelPosition}Label`,
    ...classNames
  );
  return (
    <label className={cn}>
      <input type="checkbox" onChange={onChange} />
      <span className="CheckBox__mark">
        <span></span>
      </span>
      {label && <span className="CheckBox__label">{label}</span>}
    </label>
  );
};

export { CheckBox };
