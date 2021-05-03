import React, { useState } from "react";
import { IconSetting, IconUsers } from "../../icons";
import { Card, SegmentedControl } from "../../lib";
import "./SegmentedControlPage.scss";

export function SegmentedControlExample() {
  return (
    <div className="SegmentedControlExample split-screen">
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
      <SegmentedControl
        variant="plain"
        selected={selected}
        onChange={(index) => setSelected(index)}
      >
        {[
          { icon: <IconUsers /> },
          { icon: <IconSetting /> },
          { icon: <IconUsers /> },
        ]}
      </SegmentedControl>
      <SegmentedControl
        variant="accent"
        selected={selected}
        onChange={(index) => setSelected(index)}
      >
        {[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
      </SegmentedControl>
      <SegmentedControl
        variant="danger"
        selected={selected}
        onChange={(index) => setSelected(index)}
      >
        {[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
      </SegmentedControl>
      <SegmentedControl
        variant="success"
        selected={selected}
        onChange={(index) => setSelected(index)}
      >
        {[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
      </SegmentedControl>
      <SegmentedControl
        variant="warning"
        selected={selected}
        onChange={(index) => setSelected(index)}
      >
        {[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
      </SegmentedControl>
      <hr />
      <Card>
        <SegmentedControl
          variant="plain"
          selected={selected}
          onChange={(index) => setSelected(index)}
        >
          {[
            { icon: <IconUsers />, title: "Tab 1" },
            { icon: <IconSetting />, title: "Tab 2" },
            { icon: <IconUsers />, title: "Tab 3" },
          ]}
        </SegmentedControl>
      </Card>
    </>
  );
};
