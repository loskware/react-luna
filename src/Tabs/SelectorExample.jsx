import React, { useState } from "react";
import { IconSetting, IconUsers } from "../icons";
import { Selector } from "../lib";

export function SelectorExample() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="SelectorExample split-screen">
      <section className="theme-light">
        <Selector
          variant="accent"
          selected={selected}
          onChange={(index) => setSelected(index)}
          name="selector1"
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
          name="selector2"
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
          name="selector3"
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
          name="selector4"
        >
          {[
            { icon: <IconUsers />, title: "Tab 1" },
            { icon: <IconSetting />, title: "Tab 2" },
            { icon: <IconUsers />, title: "Tab 3" },
          ]}
        </Selector>
      </section>
      <section className="theme-dark">
        <Selector
          variant="accent"
          selected={selected}
          onChange={(index) => setSelected(index)}
          name="selector5"
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
          name="selector6"
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
          name="selector7"
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
          name="selector8"
        >
          {[
            { icon: <IconUsers />, title: "Tab 1" },
            { icon: <IconSetting />, title: "Tab 2" },
            { icon: <IconUsers />, title: "Tab 3" },
          ]}
        </Selector>
      </section>
    </div>
  );
}
