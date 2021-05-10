import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * Image component
 * @param {React.ComponentPropsWithoutRef<"img">} props
 */
export const Image = (props) => {
  const { className, ...other } = props;
  const cn = classNames("Image", className);
  return <img className={cn} {...other} />;
};
