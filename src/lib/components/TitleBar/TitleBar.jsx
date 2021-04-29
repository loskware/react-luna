import React from "react";
import { classNames } from "../../classNames";

/**

 * @param {object} props
 * @param {Array<string>} [props.classes] array of CSS classes
 * @param {React.ReactNode} [props.leading] leading content
 * @param {React.ReactNode} [props.titleBar] content centered inside the bar, equaly spaced from leading and trailing contents
 * @param {React.ReactNode} [props.trailing] trailing content
 */
const Header = ({ classes = [], leading, titleBar, trailing }) => {
  const cn = classNames("TitleBar", ...classes)
  return (
    <header className={cn}>
      <div>{leading}</div>
      <div>{titleBar}</div>
      <div>{trailing}</div>
    </header>
  );
};

export { Header };
