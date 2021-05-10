import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef TitleBarProps
 * @property {React.ReactNode} [leadingContent] leading content
 * @property {React.ReactNode} [middleContent] content centered inside the bar, equaly spaced from leading and trailing contents
 * @property {React.ReactNode} [trailingContent] trailing content
 */

/**
 * @param {TitleBarProps & React.ComponentPropsWithoutRef<"header">} props
 */
export const TitleBar = (props) => {
  const {
    className,
    leadingContent,
    middleContent,
    trailingContent,
  } = props;

  const cn = classNames("TitleBar", className);
  
  return (
    <header className={cn}>
      <div>{leadingContent}</div>
      <div>{middleContent}</div>
      <div>{trailingContent}</div>
    </header>
  );
};
