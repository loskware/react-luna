import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @typedef AvatarProps
 * @property {string|number} [size] height = width = size
 */

/**
 * A simple circle avatar
 * @param {AvatarProps & React.ComponentPropsWithoutRef<"img">} props
 */
export const Avatar = (props) => {
  const { className, height, width, size, ...other} = props;
  const cn = classNames("Avatar", className);
  return (
    <img
      className={cn}
      width={width || size}
      height={height || size}
      {...other}
    />
  );
};