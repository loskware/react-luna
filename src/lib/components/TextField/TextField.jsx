import React, { useState } from "react";
import { createClassNames } from "../../createClassNames";
import "./TextField.scss";

/**
 * @param {object} props
 * @param {Array<string>} [props.classNames]
 * @param {string} [props.defaultValue]
 * @param {string} [props.placeholder]
 * @param {boolean} [props.large]
 * @param {boolean} [props.transparent]
 * @param {(
 *  value: string,
 *  prevValue: string,
 *  event: React.ChangeEvent<HTMLInputElement>
 * ) => boolean} [props.onChange]
 */
const TextField = ({
  classNames = [],
  placeholder = "",
  large = false,
  transparent = false,
  onChange,
}) => {
  const [text, setText] = useState("");
  const cn = createClassNames(
    "TextField",
    large ? "TextField--large" : null,
    transparent ? "TextField--transparent" : null,
    ...classNames
  );
  return (
    <input
      className={cn}
      onChange={(e) => {
        const value = e.target.value;
        const willChange = !(onChange?.(value, text, e) === false);
        if (willChange) setText(e.target.value);
      }}
      placeholder={placeholder}
      type="text"
      value={text}
    />
  );
};

export { TextField };
