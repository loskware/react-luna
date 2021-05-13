import React, { useState } from "react";
import { IconMoon } from "../../icons";
import { Card, Button, Text } from "../../lib";
import "./ButtonPage.scss";

const colors = ["#be00ff", "#ff8200", "#0088ff"];

export const ButtonPage = () => {
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <div className="ButtonPage">
      {/* DISABLED theme */}
      <div>
        <Text>DISABLED</Text>
        <Button solid size="compact" disabled>
          BUTTON
        </Button>
        <Button size="compact" disabled>
          BUTTON
        </Button>
        <Button size="compact" outlined disabled>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid size="normal" disabled>
          BUTTON
        </Button>
        <Button disabled>BUTTON</Button>
        <Button size="normal" outlined disabled>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid size="large" disabled>
          BUTTON
        </Button>
        <Button size="large" disabled>
          BUTTON
        </Button>
        <Button size="large" outlined disabled>
          <IconMoon size={20} />
          BUTTON
        </Button>
      </div>

      {/* PLAIN theme */}
      <div>
        <Text>PLAIN</Text>
        <Button solid theme="plain" size="compact">
          BUTTON
        </Button>
        <Button theme="plain" size="compact">
          BUTTON
        </Button>
        <Button theme="plain" size="compact" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid theme="plain" size="normal">
          BUTTON
        </Button>
        <Button theme="plain">BUTTON</Button>
        <Button theme="plain" size="normal" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid theme="plain" size="large">
          BUTTON
        </Button>
        <Button theme="plain" size="large">
          BUTTON
        </Button>
        <Button theme="plain" size="large" outlined>
          <IconMoon size={20} />
          BUTTON
        </Button>
      </div>

      {/* ACCENT theme */}
      <div>
        <Text>ACCENT</Text>
        <Button solid size="compact">
          BUTTON
        </Button>
        <Button size="compact">BUTTON</Button>
        <Button size="compact" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid size="normal">
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size="normal" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid size="large">
          BUTTON
        </Button>
        <Button size="large">BUTTON</Button>
        <Button size="large" outlined>
          <IconMoon size={20} />
          BUTTON
        </Button>
      </div>

      {/* DANGER theme */}
      <div>
        <Text>DANGER</Text>
        <Button solid theme="danger" size="compact">
          BUTTON
        </Button>
        <Button theme="danger" size="compact">
          BUTTON
        </Button>
        <Button theme="danger" size="compact" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid theme="danger" size="normal">
          BUTTON
        </Button>
        <Button theme="danger">BUTTON</Button>
        <Button theme="danger" size="normal" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid theme="danger" size="large">
          BUTTON
        </Button>
        <Button theme="danger" size="large">
          BUTTON
        </Button>
        <Button theme="danger" size="large" outlined>
          <IconMoon size={20} />
          BUTTON
        </Button>
      </div>

      {/* WARNING theme */}
      <div>
        <Text>WARNING</Text>
        <Button solid theme="warning" size="compact">
          BUTTON
        </Button>
        <Button theme="warning" size="compact">
          BUTTON
        </Button>
        <Button theme="warning" size="compact" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid theme="warning" size="normal">
          BUTTON
        </Button>
        <Button theme="warning">BUTTON</Button>
        <Button theme="warning" size="normal" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid theme="warning" size="large">
          BUTTON
        </Button>
        <Button theme="warning" size="large">
          BUTTON
        </Button>
        <Button theme="warning" size="large" outlined>
          <IconMoon size={20} />
          BUTTON
        </Button>
      </div>

      {/* SUCCESS theme */}
      <div>
        <Text>SUCCESS</Text>
        <Button solid theme="success" size="compact">
          BUTTON
        </Button>
        <Button theme="success" size="compact">
          BUTTON
        </Button>
        <Button theme="success" size="compact" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid theme="success" size="normal">
          BUTTON
        </Button>
        <Button theme="success">BUTTON</Button>
        <Button theme="success" size="normal" outlined>
          BUTTON
        </Button>
        <div className="v-spacer"></div>
        <Button solid theme="success" size="large">
          BUTTON
        </Button>
        <Button theme="success" size="large">
          BUTTON
        </Button>
        <Button theme="success" size="large" outlined>
          <IconMoon size={20} />
          BUTTON
        </Button>
      </div>

      {/* ROUNDED */}
      <div>
        <Text>ROUNDED</Text>
        <Button solid rounded theme="plain" size="compact">
          <IconMoon size={18} />
          <span className="mr-6">BUTTON</span>
        </Button>
        <Button rounded theme="plain" size="compact">
          <IconMoon size={18} />
          <span className="mr-6">BUTTON</span>
        </Button>
        <Button rounded theme="plain" size="compact" outlined>
          <IconMoon size={18} />
          <span className="mr-6">BUTTON</span>
        </Button>
        <div className="v-spacer" />
        <Button solid rounded theme="accent" size="normal">
          <span className="ml-8">BUTTON</span>
          <IconMoon size={18} />
        </Button>
        <Button rounded theme="accent">
          <span className="ml-8">BUTTON</span>
          <IconMoon size={18} />
        </Button>
        <Button rounded theme="accent" size="normal" outlined>
          <span className="ml-8">BUTTON</span>
          <IconMoon size={18} />
        </Button>
        <div className="v-spacer" />
        <Button solid rounded theme="danger" size="large">
          <IconMoon size={20} />
          <span className="mr-8">BUTTON</span>
        </Button>
        <Button rounded theme="danger" size="large">
          <IconMoon size={20} />
          <span className="mr-8">BUTTON</span>
        </Button>
        <Button rounded theme="danger" size="large" outlined>
          <IconMoon size={20} />
          <span className="mr-8">BUTTON</span>
        </Button>
      </div>

      {/* ROUNDED ICON ONLY */}
      <div>
        <Text>ROUNDED (ICON ONLY)</Text>
        <Button solid rounded theme="plain" size="compact">
          <IconMoon size={18} />
        </Button>
        <Button rounded theme="plain" size="compact">
          <IconMoon size={18} />
        </Button>
        <Button rounded theme="plain" size="compact" outlined>
          <IconMoon size={18} />
        </Button>
        <div className="v-spacer" />
        <Button solid rounded theme="accent" size="normal">
          <IconMoon size={24} />
        </Button>
        <Button rounded theme="accent">
          <IconMoon size={24} />
        </Button>
        <Button rounded theme="accent" size="normal" outlined>
          <IconMoon size={24} />
        </Button>
        <div className="v-spacer" />
        <Button solid rounded theme="danger" size="large">
          <IconMoon size={30} />
        </Button>
        <Button rounded theme="danger" size="large">
          <IconMoon size={30} />
        </Button>
        <Button rounded theme="danger" size="large" outlined>
          <IconMoon size={30} />
        </Button>
      </div>

      {/* SOFT theme */}
      <Card>
        <div
          className="soft-container"
          style={{ backgroundColor: colors[colorIndex] }}
        >
          <Text style={{ color: "white" }}>SOFT</Text>
          <Button solid theme="soft" size="compact">
            BUTTON
          </Button>
          <Button theme="soft" size="compact">
            BUTTON
          </Button>
          <Button theme="soft" size="compact" outlined>
            BUTTON
          </Button>
          <div className="v-spacer" />
          <Button solid theme="soft" size="normal">
            BUTTON
          </Button>
          <Button theme="soft">BUTTON</Button>
          <Button theme="soft" size="normal" outlined>
            BUTTON
          </Button>
          <div className="v-spacer" />
          <Button solid theme="soft" size="large">
            BUTTON
          </Button>
          <Button theme="soft" size="large">
            BUTTON
          </Button>
          <Button theme="soft" size="large" outlined>
            <IconMoon size={20} />
            BUTTON
          </Button>
          <div style={{ marginTop: "auto" }}>
            {colors.map((color, index) => (
              <span
                key={index}
                className="color-selector"
                style={{ backgroundColor: color }}
                onClick={() => setColorIndex(index)}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
