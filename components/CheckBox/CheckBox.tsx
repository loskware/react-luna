import "./CheckBox.scss";

interface CheckBoxProps {
  classNames?: string;
  label?: string;
  labelPosition?: "left" | "right";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckBox = ({
  classNames,
  label,
  labelPosition = "right",
  onChange,
}: CheckBoxProps) => {
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
