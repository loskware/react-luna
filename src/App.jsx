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
import { Card, Button, LinkButton, Header, Icon, Image, TitleBar } from "./lib";
import { classNames } from "./lib/utils";

const pages = [
  { title: "BUTTON", tag: "<{Type}Button />", page: ButtonPage },
  { title: "CHECKBOX", tag: "<CheckBox />", page: CheckboxPage },
  { title: "RADIO", tag: "<Radio />", page: RadioPage },
  { title: "SWITCH", tag: "<Switch />", page: SwitchExample },
  {
    title: "SEGMENTED CONTROL",
    tag: "<SegmentedControl />",
    page: SegmentedControlPage,
  },
  { title: "DRAGGABLE", tag: "<Draggable />", page: DraggablePage },
  { title: "FLIPVIEW", tag: "<FlipView />", page: FlipViewPage },
  { title: "LOADERS", tag: "<{Variant}Loader />", page: LoadersPage },
  { title: "MODAL", tag: "<Modal />", page: ModalPage },
];

export const App = () => {
  const [theme, setTheme] = useState(DarkTheme);
  const [pageIndex, setPageIndex] = useState(0);
  const [showSidebar, setShowsidebar] = useState(false);

  function changeTheme() {
    if (theme === DarkTheme) setTheme(LightTheme);
    else setTheme(DarkTheme);
  }

  const sideCn = classNames("App-side-bar", showSidebar && "App-side-bar-show");

  const toogleSideBar = () => setShowsidebar(!showSidebar);

  return (
    <div
      className={`App ${theme.label}`}
      style={{ overflow: showSidebar ? "hidden" : "auto" }}
    >
      {/* TITLE BAR */}
      <TitleBar
        className="App-title-bar"
        leadingContent={
          <Button
            className="MenuButton"
            theme="soft"
            rounded
            onClick={toogleSideBar}
          >
            {IconMenu}
          </Button>
        }
        middleContent={pages[pageIndex].tag}
        trailingContent={
          <>
            <Button theme="soft" rounded onClick={changeTheme}>
              {theme.changeThemeIcon}
            </Button>
            <LinkButton
              theme="soft"
              rounded
              href="https://github.com/loskware/react-luna"
              target="_blank"
            >
              {IconGithub}
            </LinkButton>
          </>
        }
      />
      {/* SIDE BAR */}
      <div className={sideCn}>
        <Card
          padding={24}
          hasShadow
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              "/images/side-bar-bkg-" +
              (theme === DarkTheme ? "dark" : "light") +
              ".svg"
            })`,
          }}
        >
          <Header>
            REACT
            <br />
            <span>LUNA</span>
          </Header>
          <Image
            src={process.env.PUBLIC_URL + "/android-chrome-512x512.png"}
            alt="React Luna Logo"
          />
          <div className="App-navigator">
            {pages.map((value, index) => (
              <div
                className={`App-link${
                  index === pageIndex ? " App-link-selected" : ""
                }`}
                key={index}
                onClick={() => {
                  setPageIndex(index);
                  setShowsidebar(false);
                }}
              >
                {value.title}
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div
        className="App-backdrop luna-acrylic"
        onClick={(event) => {
          if (event.target === event.currentTarget) toogleSideBar();
        }}
      />
      {/* CONTENT */}
      <div className="App-content">
        {React.createElement(pages[pageIndex].page)}
      </div>
      <div id="modal-root" />
    </div>
  );
};

const LightTheme = {
  label: "theme-light",
  changeThemeIcon: (
    <Icon>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </Icon>
  ),
};

const DarkTheme = {
  label: "theme-dark",
  changeThemeIcon: (
    <Icon>
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
  <Icon>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </Icon>
);

const IconGithub = (
  <Icon fill="none">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </Icon>
);
