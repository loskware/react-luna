import "./Header.scss";
/**
 * @param {object} props
 * @param {string} props.classNames
 * @param {any} [props.leadingBar]
 * @param {any} [props.titleBar]
 * @param {any} [props.trailingBar]
 */

const Header = ({
  classNames,
  leadingBar,
  titleBar,
  trailingBar
}) => {
  return /*#__PURE__*/React.createElement("header", {
    className: `Header ${classNames ?? ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header__leading"
  }, leadingBar), /*#__PURE__*/React.createElement("div", {
    className: "Header__title"
  }, titleBar), /*#__PURE__*/React.createElement("div", {
    className: "Header__trailing"
  }, trailingBar));
};

export { Header };