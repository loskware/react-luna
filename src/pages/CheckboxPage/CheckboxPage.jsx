import React, { useState } from "react";
import { Button, Card, CheckBox } from "../../lib";
import { toggle } from "../../lib/utils";
import "./CheckboxPage.scss";

export const CheckboxPage = () => {
  const [groupA, setGroupA] = useState(["1a", "2a", "3a", "4a"]);
  const [groupB, setGroupB] = useState(["1b", "2b", "3b", "4b"]);

  const [disabled, setDisabled] = useState([false, false]);

  function toggleDisable(group) {
    disabled[group] = !disabled[group];
    setDisabled([...disabled]);
  }

  return (
    <section className="CheckBoxPage">
      <Card style={{ margin: 32 }}>
        <div className="container" style={{ alignItems: "flex-start" }}>
          <h1>STATES</h1>
          <CheckBox label="Checked" checked={true} />
          <CheckBox label="Checked & Disabled" checked={true} disabled={true} />
          <CheckBox label="Unchecked" checked={false} />
          <CheckBox
            label="Unchecked & Disabled"
            checked={false}
            disabled={true}
          />
          <CheckBox label="Indeterminate" indeterminate />
          <CheckBox
            label="Indeterminate & Disabled"
            indeterminate
            disabled={true}
          />
        </div>
      </Card>
      <Card style={{ margin: 32 }}>
        <div className="container" style={{ alignItems: "flex-end" }}>
          <h1>LEFT LABEL</h1>
          <CheckBox
            label="Accent CheckBox"
            labelPosition="left"
            value="1a"
            group={groupA}
            disabled={disabled[0]}
            onToggle={() => setGroupA([...toggle(groupA, "1a")])}
          />
          <CheckBox
            theme="danger"
            label="Danger CheckBox"
            labelPosition="left"
            value="2a"
            group={groupA}
            disabled={disabled[0]}
            onToggle={() => setGroupA([...toggle(groupA, "2a")])}
          />
          <CheckBox
            theme="warning"
            label="Warning CheckBox"
            labelPosition="left"
            value="3a"
            group={groupA}
            disabled={disabled[0]}
            onToggle={() => setGroupA([...toggle(groupA, "3a")])}
          />
          <CheckBox
            theme="success"
            label="Success CheckBox"
            labelPosition="left"
            value="4a"
            group={groupA}
            disabled={disabled[0]}
            onToggle={() => setGroupA([...toggle(groupA, "4a")])}
          />
          <Button
            theme={disabled[0] ? "success" : "danger"}
            style={{ width: "100%", marginTop: 32 }}
            onClick={() => toggleDisable(0)}
          >
            {disabled[1] ? "Enable" : "Disable"}
          </Button>
        </div>
      </Card>
      <Card style={{ margin: 32 }}>
        <div className="container" style={{ alignItems: "flex-start" }}>
          <h1>RIGHT LABEL</h1>
          <CheckBox
            label="Accent CheckBox"
            value="1b"
            group={groupB}
            disabled={disabled[1]}
            onToggle={() => setGroupB([...toggle(groupB, "1b")])}
          />
          <CheckBox
            theme="danger"
            label="Danger CheckBox"
            value="2b"
            group={groupB}
            disabled={disabled[1]}
            onToggle={() => setGroupB([...toggle(groupB, "2b")])}
          />
          <CheckBox
            theme="warning"
            label="Warning CheckBox"
            value="3b"
            group={groupB}
            disabled={disabled[1]}
            onToggle={() => setGroupB([...toggle(groupB, "3b")])}
          />
          <CheckBox
            theme="success"
            label="Success CheckBox"
            value="4b"
            group={groupB}
            disabled={disabled[1]}
            onToggle={() => setGroupB([...toggle(groupB, "4b")])}
          />
          <Button
            theme={disabled[1] ? "success" : "danger"}
            style={{ width: "100%", marginTop: 32 }}
            onClick={() => toggleDisable(1)}
          >
            {disabled[1] ? "Enable" : "Disable"}
          </Button>
        </div>
      </Card>
    </section>
  );
};
