import "./CheckBox.scss";
/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {string} [props.label]
 * @param {"left"|"right"} [props.labelPosition]
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange]
 */

const CheckBox = ({
  classNames,
  label,
  labelPosition = "right",
  onChange
}) => {
  return /*#__PURE__*/React.createElement("label", {
    className: `CheckBox CheckBox--${labelPosition}Label ${classNames ?? ""}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "CheckBox__mark"
  }, /*#__PURE__*/React.createElement("span", null)), label && /*#__PURE__*/React.createElement("span", {
    className: "CheckBox__label"
  }, label));
};

export { CheckBox };