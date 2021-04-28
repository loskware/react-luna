import React, { useState } from "react";
import { IconSetting, IconUsers } from "../icons";
import { Selector } from "../lib";

export function SelectorExample() {
  return (
    <div className="SelectorExample split-screen">
      <section className="theme-light">
        <ShowCase />
      </section>
      <section className="theme-dark">
        <ShowCase />
      </section>
    </div>
  );
}

const ShowCase = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Selector
        variant="accent"
        selected={selected}
        onChange={(index) => setSelected(index)}
      >
        {[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
      </Selector>
      <Selector
        variant="danger"
        selected={selected}
        onChange={(index) => setSelected(index)}
      >
        {[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
      </Selector>
      <Selector
        variant="success"
        selected={selected}
        onChange={(index) => setSelected(index)}
      >
        {[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
      </Selector>
      <Selector
        variant="warning"
        selected={selected}
        onChange={(index) => setSelected(index)}
      >
        {[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
      </Selector>
    </>
  );
};
