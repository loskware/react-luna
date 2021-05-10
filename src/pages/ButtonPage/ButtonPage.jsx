import React from "react";
import { IconSend, IconLoad } from "../../icons";
import { Card, FlatButton, FloatingActionButton, SolidButton, Text } from "../../lib";
import "./ButtonPage.scss";

export const ButtonPage = () => {
  return (
    <div className="ButtonPage">
      {/* DISABLED VARIANT */}
      <div>
        <Text size="title">DISABLED</Text>
        <SolidButton icon={<IconLoad />} size="compact" disabled>
          BUTTON
        </SolidButton>
        <FlatButton size="compact" disabled>
          BUTTON
        </FlatButton>
        <FlatButton size="compact" icon={<IconSend />} outlined disabled>
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton icon={<IconLoad />} size="normal" disabled>
          BUTTON
        </SolidButton>
        <FlatButton icon={<IconLoad />} disabled>
          BUTTON
        </FlatButton>
        <FlatButton icon={<IconSend />} size="normal" outlined disabled>
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton icon={<IconLoad />} size="large" disabled>
          BUTTON
        </SolidButton>
        <FlatButton size="large" disabled>
          BUTTON
        </FlatButton>
        <FlatButton icon={<IconSend />} size="large" outlined disabled>
          BUTTON
        </FlatButton>
      </div>

      {/* PLAIN VARIANT */}
      <div>
        <Text size="title">PLAIN</Text>
        <SolidButton variant="plain" icon={<IconLoad />} size="compact">
          BUTTON
        </SolidButton>
        <FlatButton variant="plain" size="compact">
          BUTTON
        </FlatButton>
        <FlatButton variant="plain" icon={<IconSend />} size="compact" outlined>
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="plain" icon={<IconLoad />} size="normal">
          BUTTON
        </SolidButton>
        <FlatButton variant="plain" icon={<IconLoad />}>
          BUTTON
        </FlatButton>
        <FlatButton variant="plain" icon={<IconSend />} size="normal" outlined>
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="plain" icon={<IconLoad />} size="large">
          BUTTON
        </SolidButton>
        <FlatButton variant="plain" size="large">
          BUTTON
        </FlatButton>
        <FlatButton variant="plain" icon={<IconSend />} size="large" outlined>
          BUTTON
        </FlatButton>
      </div>

      {/* ACCENT VARIANT */}
      <div>
        <Text size="title">ACCENT</Text>
        <SolidButton icon={<IconLoad />} size="compact">
          BUTTON
        </SolidButton>
        <FlatButton size="compact">BUTTON</FlatButton>
        <FlatButton icon={<IconSend />} size="compact" outlined>
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton icon={<IconLoad />} size="normal">
          BUTTON
        </SolidButton>
        <FlatButton icon={<IconLoad />}>BUTTON</FlatButton>
        <FlatButton icon={<IconSend />} size="normal" outlined>
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton icon={<IconLoad />} size="large">
          BUTTON
        </SolidButton>
        <FlatButton size="large">BUTTON</FlatButton>
        <FlatButton icon={<IconSend />} size="large" outlined>
          BUTTON
        </FlatButton>
      </div>

      {/* DANGER VARIANT */}
      <div>
        <Text size="title">DANGER</Text>
        <SolidButton variant="danger" icon={<IconLoad />} size="compact">
          BUTTON
        </SolidButton>
        <FlatButton variant="danger" size="compact">
          BUTTON
        </FlatButton>
        <FlatButton
          variant="danger"
          icon={<IconSend />}
          size="compact"
          outlined
        >
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="danger" icon={<IconLoad />} size="normal">
          BUTTON
        </SolidButton>
        <FlatButton variant="danger" icon={<IconLoad />}>
          BUTTON
        </FlatButton>
        <FlatButton variant="danger" icon={<IconSend />} size="normal" outlined>
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="danger" icon={<IconLoad />} size="large">
          BUTTON
        </SolidButton>
        <FlatButton variant="danger" size="large">
          BUTTON
        </FlatButton>
        <FlatButton variant="danger" icon={<IconSend />} size="large" outlined>
          BUTTON
        </FlatButton>
      </div>

      {/* WARNING VARIANT */}
      <div>
        <Text size="title">WARNING</Text>
        <SolidButton variant="warning" icon={<IconLoad />} size="compact">
          BUTTON
        </SolidButton>
        <FlatButton variant="warning" size="compact">
          BUTTON
        </FlatButton>
        <FlatButton
          variant="warning"
          icon={<IconSend />}
          size="compact"
          outlined
        >
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="warning" icon={<IconLoad />} size="normal">
          BUTTON
        </SolidButton>
        <FlatButton variant="warning" icon={<IconLoad />}>
          BUTTON
        </FlatButton>
        <FlatButton
          variant="warning"
          icon={<IconSend />}
          size="normal"
          outlined
        >
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="warning" icon={<IconLoad />} size="large">
          BUTTON
        </SolidButton>
        <FlatButton variant="warning" size="large">
          BUTTON
        </FlatButton>
        <FlatButton variant="warning" icon={<IconSend />} size="large" outlined>
          BUTTON
        </FlatButton>
      </div>

      {/* SUCCESS VARIANT */}
      <div>
        <Text size="title">SUCCESS</Text>
        <SolidButton variant="success" icon={<IconLoad />} size="compact">
          BUTTON
        </SolidButton>
        <FlatButton variant="success" size="compact">
          BUTTON
        </FlatButton>
        <FlatButton
          variant="success"
          icon={<IconSend />}
          size="compact"
          outlined
        >
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="success" icon={<IconLoad />} size="normal">
          BUTTON
        </SolidButton>
        <FlatButton variant="success" icon={<IconLoad />}>
          BUTTON
        </FlatButton>
        <FlatButton
          variant="success"
          icon={<IconSend />}
          size="normal"
          outlined
        >
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="success" icon={<IconLoad />} size="large">
          BUTTON
        </SolidButton>
        <FlatButton variant="success" size="large">
          BUTTON
        </FlatButton>
        <FlatButton variant="success" icon={<IconSend />} size="large" outlined>
          BUTTON
        </FlatButton>
      </div>

      {/* FAB VARIANT */}
      <div>
        <Text size="title">FAB</Text>
        <FloatingActionButton
          size="large"
          variant="accent"
          icon={<IconSend />}
          onClick={() => null}
          disabled
        />
        <FloatingActionButton
          size="large"
          variant="plain"
          icon={<IconSend />}
          onClick={() => null}
        />
        <FloatingActionButton
          size="large"
          variant="accent"
          icon={<IconSend />}
          onClick={() => null}
        />
        <FloatingActionButton
          size="large"
          variant="danger"
          icon={<IconSend />}
          onClick={() => null}
        >
          ACTION
        </FloatingActionButton>{" "}
        <FloatingActionButton
          size="large"
          variant="warning"
          icon={<IconSend />}
          onClick={() => null}
        >
          ACTION
        </FloatingActionButton>
        <FloatingActionButton
          size="large"
          variant="success"
          icon={<IconSend />}
          onClick={() => null}
        >
          ACTION
        </FloatingActionButton>
      </div>

      {/* SOFT VARIANT */}
      <Card backgroundColor="hsl(263, 88%, 53%)">
        <Text color="white">SOFT</Text>
        <SolidButton variant="soft" icon={<IconLoad />} size="compact">
          BUTTON
        </SolidButton>
        <FlatButton variant="soft" size="compact">
          BUTTON
        </FlatButton>
        <FlatButton
          variant="soft"
          icon={<IconSend />}
          size="compact"
          outlined
        >
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="soft" icon={<IconLoad />} size="normal">
          BUTTON
        </SolidButton>
        <FlatButton variant="soft" icon={<IconLoad />}>
          BUTTON
        </FlatButton>
        <FlatButton
          variant="soft"
          icon={<IconSend />}
          size="normal"
          outlined
        >
          BUTTON
        </FlatButton>
        <div className="v-spacer"></div>
        <SolidButton variant="soft" icon={<IconLoad />} size="large">
          BUTTON
        </SolidButton>
        <FlatButton variant="soft" size="large">
          BUTTON
        </FlatButton>
        <FlatButton variant="soft" icon={<IconSend />} size="large" outlined>
          BUTTON
        </FlatButton>
      </Card>
    </div>
  );
};
