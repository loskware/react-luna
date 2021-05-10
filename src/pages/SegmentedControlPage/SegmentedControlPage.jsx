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
        segments={[
          { icon: <IconUsers /> },
          { icon: <IconSetting /> },
          { icon: <IconUsers /> },
        ]}
        onChange={(e) => setSelected(e.target.value)}
      />
      <SegmentedControl
        variant="accent"
        selected={selected}
        segments={[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
        onChange={(e) => setSelected(e.target.value)}
      />
      <SegmentedControl
        variant="danger"
        selected={selected}
        segments={[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
        onChange={(e) => setSelected(e.target.value)}
      />
      <SegmentedControl
        variant="success"
        selected={selected}
        segments={[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
        onChange={(e) => setSelected(e.target.value)}
      />
      <SegmentedControl
        variant="warning"
        selected={selected}
        segments={[
          { icon: <IconUsers />, title: "Tab 1" },
          { icon: <IconSetting />, title: "Tab 2" },
          { icon: <IconUsers />, title: "Tab 3" },
        ]}
        onChange={(e) => setSelected(e.target.value)}
      />
      <div className="v-spacer"></div>
      <Card>
        <SegmentedControl
          variant="plain"
          selected={selected}
          segments={[
            { icon: <IconUsers />, title: "Tab 1" },
            { icon: <IconSetting />, title: "Tab 2" },
            { icon: <IconUsers />, title: "Tab 3" },
          ]}
          onChange={(e) => setSelected(e.target.value)}
        />
      </Card>
    </div>
  );
}
