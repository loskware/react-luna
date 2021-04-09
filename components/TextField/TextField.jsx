import React, { useState } from "react";
import "./TextField.scss";

/**
 * @param {object} props
 * @param {string} [props.classNames]
 * @param {string} [props.defaultValue]
 * @param {string} [props.placeholder]
 * @param {boolean} [props.large]
 * @param {boolean} [props.transparent]
 * @param {(
 *  value: string,
 *  prevValue: string,
 *  event: React.ChangeEvent<HTMLInputElement>
 * ) => boolean} props.onChange
 */
const TextField = ({
  classNames,
  placeholder = "",
  large = false,
  transparent = false,
  onChange = () => null,
}) => {
  const [text, setText] = useState("");

  return (
    <input
      className={`TextField ${large ? "TextField--large" : ""} ${
        transparent ? "TextField--transparent" : ""
      } ${classNames ?? ""}`}
      onChange={(e) => {
        const value = e.target.value;
        const willChange = !(onChange(value, text, e) === false);
        if (willChange) setText(e.target.value);
      }}
      placeholder={placeholder}
      type="text"
      value={text}
    />
  );
};

export { TextField };
