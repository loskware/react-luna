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
  onChange
}) => {
  const cn = createClassNames("CheckBox", `CheckBox--${labelPosition}Label`, ...classNames);
  return /*#__PURE__*/React.createElement("label", {
    className: cn
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