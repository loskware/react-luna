/**
 * @param {object} props
 * @param {number} [props.size]
 * @param {string} [props.fillColor]
 * @param {string} [props.strokeColor]
 * @param {any} props.children
 * @param {string} [props.tooltip]
 * @returns 
 */
export function Icon({
  size = 24,
  fillColor = "none",
  strokeColor = "currentColor",
  children,
  tooltip = ""
}) {
  return /*#__PURE__*/React.createElement("svg", {
    height: size,
    width: size,
    viewBox: "0 0 24 24",
    fill: fillColor,
    stroke: strokeColor,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children, /*#__PURE__*/React.createElement("title", null, tooltip));
}