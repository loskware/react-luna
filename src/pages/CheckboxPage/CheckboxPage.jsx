import React, { useState } from "react";
import { CheckBox, ControLabel, Text } from "../../lib";
import "./CheckboxPage.scss";

export const CheckboxPage = () => {
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
      <ControLabel
        label="Lorem Ipsum"
        control={
          <CheckBox
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        }
        disabled
      />
      <hr />
      <Text size="title">ACCENT</Text>
      <ControLabel
        label="Lorem Ipsum"
        labelPosition="left"
        control={
          <CheckBox
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        }
      />
      <hr />
      <Text size="title">DANGER</Text>
      <ControLabel
        label="Lorem Ipsum"
        control={
          <CheckBox
            checked={checked}
            variant="danger"
            onChange={() => setChecked(!checked)}
          />
        }
      />
      <hr />
      <Text size="title">WARNING</Text>
      <ControLabel
        label="Lorem Ipsum"
        labelPosition="left"
        control={
          <CheckBox
            checked={checked}
            variant="warning"
            onChange={() => setChecked(!checked)}
          />
        }
      />
      <hr />
      <Text size="title">SUCCESS</Text>
      <ControLabel
        label="Lorem Ipsum"
        control={
          <CheckBox
            checked={checked}
            variant="success"
            onChange={() => setChecked(!checked)}
          />
        }
      />
    </>
  );
};
