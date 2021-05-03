import React from "react";

// TODO: add properties and jsdoc
export const SickleLoader = ({...other}) => {
  return (
    <div className="SickleLoader" {...other}>
      <span className="SickleLoader-outer"></span>
      <span className="SickleLoader-inner"></span>
    </div>
  );
}
