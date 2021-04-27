import React from "react";
import { PacmanLoader } from "../lib";

export function LoadersExample() {
  return (
    <div className="LoadersExample split-screen">
      <section className="theme-light">
        <PacmanLoader />
      </section>
      <section className="theme-dark">
        <PacmanLoader />
      </section>
    </div>
  );
}
