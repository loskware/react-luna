import React, { useState } from "react";
import { Switch, Text } from "../../lib";
import "./SwitchPage.scss";

export const SwitchExample = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="CheckBoxExample">
      <Text size="title">DISABLED</Text>
      <Switch
        checked={checked}
        variant="accent"
        size="compact"
        onChange={() => setChecked(!checked)}
        disabled
      />
      <Switch
        checked={checked}
        variant="accent"
        size="normal"
        onChange={() => setChecked(!checked)}
        disabled
      />
      <Switch
        checked={checked}
        variant="accent"
        size="large"
        onChange={() => setChecked(!checked)}
        disabled
      />
      <div className="v-spacer"></div>
      <Text size="title">ACCENT</Text>
      <Switch
        checked={checked}
        variant="accent"
        size="compact"
        onChange={() => setChecked(!checked)}
      />
      <Switch
        checked={checked}
        variant="accent"
        size="normal"
        onChange={() => setChecked(!checked)}
      />
      <Switch
        checked={checked}
        variant="accent"
        size="large"
        onChange={() => setChecked(!checked)}
      />
      <div className="v-spacer"></div>
      <Text size="title">DANGER</Text>
      <Switch
        checked={checked}
        variant="danger"
        size="compact"
        onChange={() => setChecked(!checked)}
      />
      <Switch
        checked={checked}
        variant="danger"
        size="normal"
        onChange={() => setChecked(!checked)}
      />
      <Switch
        checked={checked}
        variant="danger"
        size="large"
        onChange={() => setChecked(!checked)}
      />
      <div className="v-spacer"></div>
      <Text size="title">WARNING</Text>
      <Switch
        checked={checked}
        variant="warning"
        size="compact"
        onChange={() => setChecked(!checked)}
      />
      <Switch
        checked={checked}
        variant="warning"
        size="normal"
        onChange={() => setChecked(!checked)}
      />
      <Switch
        checked={checked}
        variant="warning"
        size="large"
        onChange={() => setChecked(!checked)}
      />
      <div className="v-spacer"></div>
      <Text size="title">SUCCESS</Text>
      <Switch
        checked={checked}
        variant="success"
        size="compact"
        onChange={() => setChecked(!checked)}
      />
      <Switch
        checked={checked}
        variant="success"
        size="normal"
        onChange={() => setChecked(!checked)}
      />
      <Switch
        checked={checked}
        variant="success"
        size="large"
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};
