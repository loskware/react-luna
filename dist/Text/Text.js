import { createClassNames } from "../createClassNames";
import "./Text.scss";
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {any} props.children
 * @param {"accent"|"onAccent"|"primary"|"secondary"|"tertiary"} [props.color]
 * @param {"body"|"title"|"subtitle"|"label"} [props.size]
 * @param {300|400|600|700} [props.weight]
 */

const Text = ({
  classNames = [],
  children,
  color = "primary",
  size = "body",
  weight = 400
}) => {
  const cn = createClassNames("Text", `Text--color-${color}`, `Text--size-${size}`, `Text--weight-${weight}`, ...classNames);
  return /*#__PURE__*/React.createElement("p", {
    className: cn
  }, children);
};

export { Text };