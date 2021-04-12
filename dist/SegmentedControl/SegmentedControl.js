import "./SegmentedControl.scss";
/**
 * @typedef {Object} SegmentedControlChild
 * @property {any} [icon]
 * @property {string} [title]
 */

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {SegmentedControlChild[]} props.children
 * @param {string} props.name
 * @param {number} props.selected
 * @param {function} props.onChange
 */

export const SegmentedControl = ({
  classNames,
  children,
  name,
  selected,
  onChange
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `SegmentedControl ${classNames ?? ""}`
  }, children.map(({
    icon,
    title
  }, index) => /*#__PURE__*/React.createElement("label", {
    key: index
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: index,
    checked: selected === index,
    onChange: e => onChange?.(+e.target.value, selected, e)
  }), /*#__PURE__*/React.createElement("span", null, icon, title && /*#__PURE__*/React.createElement("span", null, title)))));
};