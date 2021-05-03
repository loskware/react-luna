import React, { useState } from "react";
import "./App.scss";
import {
  ButtonPage,
  CheckboxPage,
  DraggablePage,
  FlipViewPage,
  LoadersPage,
  ModalPage,
  RadioPage,
  SegmentedControlPage,
  SwitchExample,
} from "./pages";
import { TitleBar } from "./lib";

const sections = [
  { title: "BUTTON", section: ButtonPage },
  { title: "CHECKBOX", section: CheckboxPage },
  { title: "RADIO", section: RadioPage },
  { title: "SWITCH", section: SwitchExample },
  { title: "SEGMENTED CONTROL", section: SegmentedControlPage },
  { title: "DRAGGABLE", section: DraggablePage },
  { title: "FLIPVIEW", section: FlipViewPage },
  { title: "LOADERS", section: LoadersPage },
  { title: "MODAL", section: ModalPage },
];

const App = () => {
  const [sectionIndex] = useState(0);

  return (
    <div className="App theme-light">
      <TitleBar className="App-title-bar" middleContent="BUTTON" />
      <div className="App-content">{React.createElement(sections[sectionIndex].section)}</div>
      <div id="modal-root"></div>
    </div>
  );
};

export { App };

{/* <div className="App-side-bar theme-dark">
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
      </div> */}