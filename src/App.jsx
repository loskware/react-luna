import React, { useState } from "react";
import "./App.scss";
import { Image, Text } from "./lib";
import {
  ButtonExample,
  CheckBoxExample,
  FlipExample,
  LoadersExample,
  SegmentedControlExample,
  SwitchExample,
} from "./Tabs";
import { DraggableExample } from "./Tabs/DraggableExample";

const sections = [
  { title: "BUTTON", section: ButtonExample },
  { title: "CHECKBOX", section: CheckBoxExample },
  { title: "DRAGGABLE", section: DraggableExample },
  { title: "FLIPVIEW", section: FlipExample },
  { title: "SEGMENTED CONTROL", section: SegmentedControlExample },
  { title: "SWITCH", section: SwitchExample },
  { title: "LOADERS", section: LoadersExample },
];

const App = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <div className="App">
      <div className="App-side-bar theme-dark">
        <div className="App-title-bar">
          <Text size="title" weight={700}>
            REACT LUNA
          </Text>
          <Image
            src={process.env.PUBLIC_URL + "/android-chrome-512x512.png"}
            alt="React Luna Logo"
          />
        </div>
        <div className="App-navigator">
          {sections.map((value, index) => (
            <div
              className={`nav-link${
                index === sectionIndex ? " nav-link-selected" : ""
              }`}
              key={index}
              onClick={() => setSectionIndex(index)}
            >
              {value.title}
            </div>
          ))}
        </div>
      </div>
      <div className="App-content">{React.createElement(sections[sectionIndex].section)}</div>
    </div>
  );
};

export { App };
