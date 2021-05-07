import React, { useState } from "react";
import { ControLabel, Radio } from "../../lib";
import "./RadioPage.scss";

export const RadioPage = () => {
  const [checkedIndex, setCheckedIndex] = useState(null);

  return (
    <div className="RadioPage split-screen">
      {Options.map((option, index) => (
        <ControLabel
          key={index}
          label={option.label}
          disabled={index === 0}
          control={
            <Radio
              // @ts-ignore
              variant={option.variant}
              checked={index === checkedIndex}
              onChange={() => setCheckedIndex(index)}
            />
          }
        />
      ))}
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
