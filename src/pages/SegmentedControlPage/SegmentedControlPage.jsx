import React, { useState } from "react";
import { IconSetting, IconUsers } from "../../icons";
import { Card, SegmentedControl } from "../../lib";
import "./SegmentedControlPage.scss";

export function SegmentedControlPage() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="SegmentedControlPage">
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
      <div className="v-spacer"></div>
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
    </div>
  );
}
