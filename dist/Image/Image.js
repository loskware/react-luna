import { createClassNames } from "../createClassNames";
/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {string} props.src
 * @param {string} props.alt
 * @param {number} [props.height]
 * @param {number} [props.width]
 */

const Image = ({
  classNames = [],
  src,
  alt = "",
  height,
  width
}) => {
  const cn = createClassNames("image", ...classNames);
  return /*#__PURE__*/React.createElement("img", {
    className: cn,
    src: src,
    alt: alt,
    width: width,
    height: height
  });
};

export { Image };