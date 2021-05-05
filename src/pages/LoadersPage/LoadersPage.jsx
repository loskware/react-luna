import React from "react";
import { PacmanLoader, SickleLoader } from "../../lib";
import "./LoadersPage.scss";

export function LoadersPage() {
  return (
    <div className="LoadersPage split-screen">
      <PacmanLoader />
      <div className="v-spacer"></div>
      <SickleLoader />
    </div>
  );
}
