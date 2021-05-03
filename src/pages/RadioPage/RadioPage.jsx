import React, { useState } from "react";
import { ControLabel, Radio } from "../../lib";
import "./RadioPage.scss";

export const RadioPage = () => {
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

const Options = [
  { label: "Option 1", variant: "accent" },
  { label: "Option 2", variant: "accent" },
  { label: "Option 3", variant: "danger" },
  { label: "Option 4", variant: "warning" },
  { label: "Option 5", variant: "success" },
];

const ShowCase = () => {
  const [checkedIndex, setCheckedIndex] = useState(null);

  return (
    <>
      {Options.map((option, index) => (
        <div key={Math.random()}>
          <ControLabel
            label={option.label}
            disabled={index === 0}
            control={
              <Radio
                variant={option.variant}
                checked={index === checkedIndex}
                onChange={() => setCheckedIndex(index)}
              />
            }
          />
        </div>
      ))}
    </>
  );
};
