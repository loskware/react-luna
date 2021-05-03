import React from "react";
import { classNames } from "../../utils/classNames";

/**

 * @param {object} props
 * @param {string} [props.className] custom CSS classes
 * @param {React.ReactNode} [props.leadingContent] leading content
 * @param {React.ReactNode} [props.middleContent] content centered inside the bar, equaly spaced from leading and trailing contents
 * @param {React.ReactNode} [props.trailingContent] trailing content
 */
export const TitleBar = ({
  className,
  leadingContent,
  middleContent,
  trailingContent,
}) => {
  const cn = classNames("TitleBar", className);
  return (
    <header className={cn}>
      <div>{leadingContent}</div>
      <div>{middleContent}</div>
      <div>{trailingContent}</div>
    </header>
  );
};
