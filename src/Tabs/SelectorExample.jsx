import React, { useState } from "react";
import { Selector } from "../lib";

export function SelectorExample() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="SelectorExample split-screen">
      <section className="theme-light">
        <Selector selected={selected} onChange={(index) => setSelected(index)}>
          {[{ title: "Tab 1" }, { title: "Tab 2" }, { title: "Tab 3" }]}
        </Selector>
      </section>
      <section className="theme-dark">
        <Selector selected={selected} onChange={(index) => setSelected(index)}>
          {[{ title: "Tab 1" }, { title: "Tab 2" }, { title: "Tab 3" }]}
        </Selector>
      </section>
    </div>
  );
}
