import React from "react";
import { CheckBox, Text } from "../lib";

export const CheckBoxes = () => {
  return (
    <div className="CheckBoxes split-screen">
      <section className="theme-light">
        <Text size="title">DISABLED</Text>
        <CheckBox
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
          disabled
        />
        <hr />
        <Text size="title">ACCENT</Text>
        <CheckBox
          variant="accent"
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
        <hr />
        <Text size="title">DANGER</Text>
        <CheckBox
          variant="danger"
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
        <hr />
        <Text size="title">WARNING</Text>
        <CheckBox
          variant="warning"
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
        <hr />
        <Text size="title">SUCCESS</Text>
        <CheckBox
          variant="success"
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
      </section>

      <section className="theme-dark">
      <Text size="title">DISABLED</Text>
        <CheckBox
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
          disabled
        />
        <hr />
        <Text size="title">ACCENT</Text>
        <CheckBox
          variant="accent"
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
        <hr />
        <Text size="title">DANGER</Text>
        <CheckBox
          variant="danger"
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
        <hr />
        <Text size="title">WARNING</Text>
        <CheckBox
          variant="warning"
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
        <hr />
        <Text size="title">SUCCESS</Text>
        <CheckBox
          variant="success"
          label="Lorem Ipsum"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
      </section>
    </div>
  );
};
