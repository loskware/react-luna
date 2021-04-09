import "./CheckBox.scss";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {string} [props.label]
 * @param {"left"|"right"} [props.labelPosition]
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange]
 */
const CheckBox = ({ classNames, label, labelPosition = "right", onChange }) => {
  return (
    <label
      className={`CheckBox CheckBox--${labelPosition}Label ${classNames ?? ""}`}
    >
      <input type="checkbox" onChange={onChange} />
      <span className="CheckBox__mark">
        <span></span>
      </span>
      {label && <span className="CheckBox__label">{label}</span>}
    </label>
  );
};

export { CheckBox };
