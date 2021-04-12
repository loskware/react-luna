import "./Avatar.scss";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {boolean} [props.hasBorder]
 * @param {number} [props.size]
 * @param {string} props.source
 */
function Avatar({ classNames, hasBorder = false, size, source }) {
  return (
    <img
      className={`Avatar ${classNames ?? ""}`}
      width={`${size}px`}
      height={`${size}px`}
      src={source}
      alt="avatar"
      style={
        hasBorder
          ? { border: "solid 2px var(--avatar-color-border" }
          : undefined
      }
    />
  );
}

export { Avatar };
