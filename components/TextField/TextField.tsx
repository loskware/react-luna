import React, { useState } from "react";
import "./TextField.scss";

type TextFieldChangeEventHandler = (
  value: string,
  prevValue: string,
  event: React.ChangeEvent<HTMLInputElement>
) => boolean | undefined;

interface TextFieldProps {
  classNames?: string;
  defaultValue?: string;
  placeholder?: string;
  large?: boolean;
  transparent?: boolean;
  onChange?: TextFieldChangeEventHandler;
}

const TextField = ({
  classNames,
  placeholder = "",
  large = false,
  transparent = false,
  onChange,
}: TextFieldProps) => {
  const [text, setText] = useState("");

  return (
    <input
      className={`TextField ${large ? "TextField--large" : ""} ${
        transparent ? "TextField--transparent" : ""
      } ${classNames ?? ""}`}
      onChange={(e) => {
        const value = e.target.value;
        const willChange = !(onChange?.(value, text, e) === false);
        if (willChange) setText(value);
      }}
      placeholder={placeholder}
      type="text"
      value={text}
    />
  );
};

export { TextField };
