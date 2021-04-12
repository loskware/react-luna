import { createClassNames } from "../createClassNames";
import "./Radio.scss";
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {{ label: string }[]} props.children
 * @param {string} props.name
 * @param {number} props.selected
 * @param {function} props.onChange
 */

export const Radio = ({
  classNames = [],
  children,
  name,
  selected,
  onChange
}) => {
  const cn = createClassNames("SegmentedControl", ...classNames);
  return /*#__PURE__*/React.createElement("div", {
    className: cn
  }, children.map(({
    label
  }, index) => /*#__PURE__*/React.createElement("label", {
    key: index
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: index,
    checked: selected === index,
    onChange: e => onChange?.(+e.target.value, selected, e)
  }), /*#__PURE__*/React.createElement("span", null, label))));
};