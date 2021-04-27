import React, { useState } from "react";
import "./App.css";
import { Image, Text } from "./lib";
import { ButtonExample, CheckBoxExample, FlipExample, LoadersExample, SelectorExample } from "./Tabs";
import { DraggableExample } from "./Tabs/DraggableExample";

const sections = [
  <ButtonExample key="0" />,
  <CheckBoxExample key="1" />,
  <DraggableExample key="2" />,
  <FlipExample key="3" />,
  <LoadersExample key="4" />,
  <SelectorExample key="5" />
];

const App = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <div className="App">
      <div className="side-bar theme-dark">
        <div className="title-bar">
          <Text size="title" weight={700}>
            REACT LUNA
          </Text>
          <Image
            src={process.env.PUBLIC_URL + "/android-chrome-512x512.png"}
            alt="React Luna Logo"
          />
        </div>
        <div className="navigator">
          <div className="nav-link" onClick={() => setSectionIndex(0)}>
            BUTTON
          </div>
          <div className="nav-link" onClick={() => setSectionIndex(1)}>
            CHECKBOX
          </div>
          <div className="nav-link" onClick={() => setSectionIndex(2)}>
            DRAGGABLE
          </div>
          <div className="nav-link" onClick={() => setSectionIndex(3)}>
            FLIPVIEW
          </div>
          <div className="nav-link" onClick={() => setSectionIndex(4)}>
            LOADERS
          </div>
          <div className="nav-link" onClick={() => setSectionIndex(5)}>
            SELECTOR
          </div>
        </div>
      </div>
      <div className="content">{sections[sectionIndex]}</div>
    </div>
  );
};

export { App };
