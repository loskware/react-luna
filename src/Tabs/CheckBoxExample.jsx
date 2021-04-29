import React, { useState } from "react";
import { CheckBox, Text } from "../lib";

export const CheckBoxExample = () => {
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
      <CheckBox
        checked={checked}
        label="Lorem Ipsum"
        labelPosition="left"
        onChange={() => setChecked(!checked)}
        disabled
      />
      <hr />
      <Text size="title">ACCENT</Text>
      <CheckBox
        checked={checked}
        variant="accent"
        label="Lorem Ipsum"
        labelPosition="left"
        onChange={() => setChecked(!checked)}
      />
      <hr />
      <Text size="title">DANGER</Text>
      <CheckBox
        checked={checked}
        variant="danger"
        label="Lorem Ipsum"
        labelPosition="right"
        onChange={() => setChecked(!checked)}
      />
      <hr />
      <Text size="title">WARNING</Text>
      <CheckBox
        checked={checked}
        variant="warning"
        label="Lorem Ipsum"
        labelPosition="left"
        onChange={() => setChecked(!checked)}
      />
      <hr />
      <Text size="title">SUCCESS</Text>
      <CheckBox
        checked={checked}
        variant="success"
        label="Lorem Ipsum"
        labelPosition="right"
        onChange={() => setChecked(!checked)}
      />
    </>
  );
};
