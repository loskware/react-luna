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
  onChange
}) => {
  return /*#__PURE__*/React.createElement("label", {
    className: `Switch Switch--${size} ${classNames ?? ""}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: e => onChange?.(e.target.checked, e)
  }), /*#__PURE__*/React.createElement("span", {
    className: "Switch__track"
  }), /*#__PURE__*/React.createElement("span", {
    className: "Switch__slider"
  }, children));
};

export { Switch };