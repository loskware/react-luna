import React, { useState } from "react";
import { Button, Card, CheckBox, ControlLabel, Text } from "../../lib";
import "./CheckboxPage.scss";

const Section = ({ labelPosition }) => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const onChange = () => setChecked(!checked);
  const toogleDisable = () => setDisabled(!disabled);

  return (
    <Card>
      <div
        className="container"
        style={{
          alignItems: labelPosition === "left" ? "flex-end" : "flex-start",
        }}
      >
        <Text style={{ alignSelf: "center", marginBottom: 16 }}>
          {(labelPosition + " Label").toUpperCase()}
        </Text>
        <ControlLabel
          label="Accent CheckBox"
          labelPosition={labelPosition}
          control={<CheckBox checked={checked} onChange={onChange} />}
          disabled={disabled}
        />
        <ControlLabel
          label="Danger CheckBox"
          labelPosition={labelPosition}
          control={
            <CheckBox checked={checked} variant="danger" onChange={onChange} />
          }
          disabled={disabled}
        />
        <ControlLabel
          label="Warning CheckBox"
          labelPosition={labelPosition}
          control={
            <CheckBox checked={checked} variant="warning" onChange={onChange} />
          }
          disabled={disabled}
        />
        <ControlLabel
          label="Success CheckBox"
          labelPosition={labelPosition}
          control={
            <CheckBox checked={checked} variant="success" onChange={onChange} />
          }
          disabled={disabled}
        />
        <Button
          theme={disabled ? "accent" : "danger"}
          style={{ width: "100%", marginTop: 32 }}
          onClick={toogleDisable}
        >
          {disabled ? "Enable" : "Disable"}
        </Button>
      </div>
    </Card>
  );
};

export const CheckboxPage = () => {
  return (
    <section className="CheckboxPage">
      <Section labelPosition="left" />
      <Section labelPosition="right" />
    </section>
  );
};
