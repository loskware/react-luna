import React, { useState } from "react";
import { classNames } from "../../utils/classNames";

/**
 * @param {object} props
 * @param {string} [props.className] custom CSS class
 * @param {boolean} [props.large] large variant
 * @param {any} [props.leadingIcon]
 * @param {string} [props.placeholder]
 * @param {any} [props.trailingIcon]
 * @param {boolean} [props.transparent]
 * @param {"accent"|"danger"|"warning"|"success"} [props.variant] color variant
 * @param {(
 *  value: string,
 *  prevValue: string,
 *  event: React.ChangeEvent<HTMLInputElement>
 * ) => boolean} [props.onChange]
 */
const TextField = ({
  className,
  large = false,
  leadingIcon,
  placeholder = "",
  trailingIcon,
  transparent = false,
  variant = "accent",
  onChange,
}) => {
  const [text, setText] = useState("");
  const cn = classNames(
    "TextField",
    `TextField-${variant}`,
    large && "TextField-large",
    transparent && "TextField-transparent",
    className
  );
  return (
    <div className={cn}>
      {leadingIcon}
      <input
        onChange={(e) => {
          const value = e.target.value;
          const willChange = !(onChange?.(value, text, e) === false);
          if (willChange) setText(e.target.value);
        }}
        placeholder={placeholder}
        type="text"
        value={text}
      />
      {trailingIcon}
    </div>
  );
};

export { TextField };
