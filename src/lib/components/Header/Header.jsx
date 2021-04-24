import React from "react";
import { createClassNames } from "../../createClassNames";
import "./Header.css";

/**
 * @param {object} props
 * @param {Array<string>} props.classNames
 * @param {any} [props.leadingBar]
 * @param {any} [props.titleBar]
 * @param {any} [props.trailingBar]
 */
const Header = ({ classNames = [], leadingBar, titleBar, trailingBar }) => {
  const cn = createClassNames("Header", ...classNames)
  return (
    <header className={cn}>
      <div>{leadingBar}</div>
      <div>{titleBar}</div>
      <div>{trailingBar}</div>
    </header>
  );
};

export { Header };
