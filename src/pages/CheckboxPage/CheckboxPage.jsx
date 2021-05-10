import React, { useState } from "react";
import { CheckBox, ControlLabel, Text } from "../../lib";
import "./CheckboxPage.scss";

export const CheckboxPage = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="CheckboxPage">
      <Text size="title">DISABLED</Text>
      <ControlLabel
        label="Lorem Ipsum"
        control={
          <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
        }
        disabled
      />
      <div className="v-spacer"></div>
      <Text size="title">ACCENT</Text>
      <ControlLabel
        label="Lorem Ipsum"
        labelPosition="left"
        control={
          <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
        }
      />
      <div className="v-spacer"></div>
      <Text size="title">DANGER</Text>
      <ControlLabel
        label="Lorem Ipsum"
        control={
          <CheckBox
            checked={checked}
            variant="danger"
            onChange={() => setChecked(!checked)}
          />
        }
      />
      <div className="v-spacer"></div>
      <Text size="title">WARNING</Text>
      <ControlLabel
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
      <div className="v-spacer"></div>
      <Text size="title">SUCCESS</Text>
      <ControlLabel
        label="Lorem Ipsum"
        control={
          <CheckBox
            checked={checked}
            variant="success"
            onChange={() => setChecked(!checked)}
          />
        }
      />
      <div className="v-spacer"></div>
      <CheckBox
        checked={checked}
        variant="success"
        disabled
        onChange={() => setChecked(!checked)}
      />
      <div className="v-spacer"></div>
      <CheckBox
        checked={checked}
        variant="success"
        onChange={() => setChecked(!checked)}
        
      />
    </div>
  );
};
