import "./Switch.scss";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {boolean} props.checked
 * @param {any} [props.children]
 * @param {"default"|"large"|"xlarge"} [props.size]
 * @param {function} props.onChange
 */
const Switch = ({
  classNames,
  checked,
  children,
  size = "default",
  onChange,
}) => {
  return (
    <label className={`Switch Switch--${size} ${classNames ?? ""}`}>
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
