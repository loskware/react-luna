import React, { useState } from "react";
import "./App.css";
import { Image, Text } from "./lib";
import { Buttons, CheckBoxes } from "./Tabs";

const sections = [<Buttons key={0} />, <CheckBoxes key={1} />];

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
        </div>
      </div>
      <div className="content">{sections[sectionIndex]}</div>
    </div>
  );
};

export { App };
