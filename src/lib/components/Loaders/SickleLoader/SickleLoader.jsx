import React from "react";

/**
 * @typedef SickleLoaderProps
 */

/**
 * @param {React.ComponentPropsWithoutRef<"div">} props
 */
export const SickleLoader = (props) => {
  const { ...other } = props;
  return (
    <div className="SickleLoader" {...other}>
      <span className="SickleLoader-outer"></span>
      <span className="SickleLoader-inner"></span>
    </div>
  );
};
