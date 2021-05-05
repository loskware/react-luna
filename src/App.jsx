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
import { Card, FlatButton, Icon, Image, Text, TitleBar } from "./lib";
import { classNames } from "./lib/utils";

const sections = [
  { title: "BUTTON", tag: "<{Type}Button />", section: ButtonPage },
  { title: "CHECKBOX", tag: "<CheckBox />", section: CheckboxPage },
  { title: "RADIO", tag: "<Radio />", section: RadioPage },
  { title: "SWITCH", tag: "<Switch />", section: SwitchExample },
  {
    title: "SEGMENTED CONTROL",
    tag: "<SegmentedControl />",
    section: SegmentedControlPage,
  },
  { title: "DRAGGABLE", tag: "<Draggable />", section: DraggablePage },
  { title: "FLIPVIEW", tag: "<FlipView />", section: FlipViewPage },
  { title: "LOADERS", tag: "<{Variant}Loader />", section: LoadersPage },
  { title: "MODAL", tag: "<Modal />", section: ModalPage },
];

export const App = () => {
  const [theme, setTheme] = useState(DarkTheme);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [showSidebar, setShowsidebar] = useState(false);

  function changeTheme() {
    if (theme === DarkTheme) setTheme(LightTheme);
    else setTheme(DarkTheme);
  }

  const sideCn = classNames("App-side-bar", showSidebar && "App-side-bar-show");

  return (
    <div className={`App ${theme.label}`}>
      {/* TITLE BAR */}
      <TitleBar
        className="App-title-bar"
        leadingContent={
          <FlatButton
            className="MenuButton"
            variant="plain"
            rounded
            icon={IconMenu}
            onClick={() => setShowsidebar(!showSidebar)}
          />
        }
        middleContent={sections[sectionIndex].tag}
        trailingContent={
          <>
            <FlatButton
              variant="plain"
              rounded
              icon={theme.changeThemeIcon}
              onClick={changeTheme}
            />
            <FlatButton
              variant="plain"
              rounded
              icon={IconGithub}
              href="https://github.com/loskware/react-luna"
              target="_blank"
            />
          </>
        }
      />
      {/* SIDE BAR */}
      <div className={sideCn}>
        <Card hasShadow>
          <Text color="accent">REACT LUNA</Text>
          <Image
            src={process.env.PUBLIC_URL + "/android-chrome-512x512.png"}
            alt="React Luna Logo"
          />
          <div className="App-navigator">
            {sections.map((value, index) => (
              <div
                className={`App-link${
                  index === sectionIndex ? " App-link-selected" : ""
                }`}
                key={index}
                onClick={() => {
                  setSectionIndex(index);
                  setShowsidebar(false);
                }}
              >
                {value.title}
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="App-backdrop"></div>
      {/* CONTENT */}
      <div className="App-content">
        {React.createElement(sections[sectionIndex].section)}
      </div>
      <div id="modal-root" />
    </div>
  );
};

const LightTheme = {
  label: "theme-light",
  changeThemeIcon: (
    <Icon fillColor="none">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </Icon>
  ),
};

const DarkTheme = {
  label: "theme-dark",
  changeThemeIcon: (
    <Icon fillColor="none">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </Icon>
  ),
};

const IconMenu = (
  <Icon fillColor="none">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </Icon>
);

const IconGithub = (
  <Icon fillColor="none">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </Icon>
);
