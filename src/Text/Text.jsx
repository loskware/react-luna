import "./Text.scss";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {any} props.children
 * @param {"accent"|"onAccent"|"primary"|"secondary"|"tertiary"} [props.color]
 * @param {"body"|"title"|"subtitle"|"label"} [props.size]
 * @param {300|400|600|700} [props.weight]
 */
const Text = ({
  classNames,
  children,
  color = "primary",
  size = "body",
  weight = 400,
}) => {
  return (
    <p
      className={`Text Text--color-${color} Text--size-${size}
       Text--weight-${weight} ${classNames ?? ""}`}
    >
      {children}
    </p>
  );
};

export { Text };
