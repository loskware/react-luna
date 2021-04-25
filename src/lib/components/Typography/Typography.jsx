import React from "react";
import { classNames } from "../../classNames";
import "./Typography.css";

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {any} props.children
 * @param {"accent"|"onAccent"|"primary"|"secondary"|"tertiary"} [props.color]
 * @param {"body"|"title"|"subtitle"|"label"} [props.size]
 * @param {300|400|600|700} [props.weight]
 */
const Text = ({
  classes = [],
  children,
  color = "primary",
  size = "body",
  weight = 400,
}) => {
  const cn = classNames(
    "Text",
    `Text--color-${color}`,
    `Text--size-${size}`,
    `Text--weight-${weight}`,
    ...classes
  );
  return <p className={cn}>{children}</p>;
};

export { Text };
