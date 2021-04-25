import React, { useState } from "react";
import { classNames } from "../../classNames";
import "./TextField.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classes]
 * @param {string} [props.placeholder]
 * @param {boolean} [props.large]
 * @param {any} [props.leadingIcon]
 * @param {any} [props.trailingIcon]
 * @param {boolean} [props.transparent]
 * @param {(
 *  value: string,
 *  prevValue: string,
 *  event: React.ChangeEvent<HTMLInputElement>
 * ) => boolean} [props.onChange]
 */
const TextField = ({
  classes = [],
  placeholder = "",
  large = false,
  leadingIcon,
  trailingIcon,
  transparent = false,
  onChange,
}) => {
  const [text, setText] = useState("");
  const cn = classNames(
    "TextField",
    large && "TextField--large",
    transparent && "TextField--transparent",
    ...classes
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
