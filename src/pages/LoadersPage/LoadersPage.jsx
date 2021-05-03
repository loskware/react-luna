import React from "react";
import { PacmanLoader, SickleLoader } from "../../lib";

export function LoadersPage() {
  return (
    <div className="LoadersPage split-screen">
      <section className="theme-light">
        <PacmanLoader />
        <SickleLoader />
      </section>
      <section className="theme-dark">
        <PacmanLoader />
        <SickleLoader />
      </section>
    </div>
  );
}
