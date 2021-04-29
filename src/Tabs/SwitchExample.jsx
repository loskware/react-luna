import React, { useState } from "react";
import { Switch, Text } from "../lib";

export const SwitchExample = () => {
  return (
    <div className="CheckBoxExample split-screen">
      <section className="theme-light">
        <ShowCase />
      </section>
      <section className="theme-dark">
        <ShowCase />
      </section>
    </div>
  );
};

const ShowCase = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Text size="title">DISABLED</Text>

      <hr />
      <Text size="title">ACCENT</Text>
      <Switch
        checked={checked}
        variant="accent"
        size="normal"
        onChange={() => setChecked(!checked)}
      />
      <hr />
      <Text size="title">DANGER</Text>

      <hr />
      <Text size="title">WARNING</Text>

      <hr />
      <Text size="title">SUCCESS</Text>
    </>
  );
};
