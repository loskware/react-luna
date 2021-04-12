import "./PacmanLoader.scss";
/**
 * @param {object} props
 * @param {string} [props.classNames]
 */

const PacmanLoader = ({
  classNames
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `PacmanLoader ${classNames ?? ""}`
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null));
};

export { PacmanLoader };