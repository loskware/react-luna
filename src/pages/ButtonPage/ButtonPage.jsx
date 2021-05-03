import React from "react";
import { IconSend, IconLoad } from "../../icons";
import {
  Card,
  FlatButton,
  FloatingActionButton,
  SolidButton,
  Text,
} from "../../lib";
import "./ButtonPage.scss";

export const ButtonPage = () => {
  return (
    <div className="ButtonPage split-screen">
      <section id="secHead" className="theme-light">
        <ShowCase />
      </section>
      <section className="theme-dark">
        <ShowCase />
      </section>
    </div>
  );
};

const ShowCase = () => (
  <>
    <Text size="title">DISABLED</Text>
    <div>
      <SolidButton icon={<IconLoad />} disabled>
        BUTTON
      </SolidButton>
      <FlatButton disabled>BUTTON</FlatButton>
      <FlatButton icon={<IconSend />} outlined disabled>
        BUTTON
      </FlatButton>
    </div>

    <div className="v-spacer"></div>
    <Text size="title">PLAIN</Text>
    <div>
      <SolidButton variant="plain" icon={<IconLoad />} size="compact">
        BUTTON
      </SolidButton>
      <FlatButton variant="plain" size="compact">
        BUTTON
      </FlatButton>
      <FlatButton variant="plain" icon={<IconSend />} size="compact" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
      <SolidButton variant="plain" icon={<IconLoad />} size="normal">
        BUTTON
      </SolidButton>
      <FlatButton variant="plain" icon={<IconLoad />}>
        BUTTON
      </FlatButton>
      <FlatButton variant="plain" icon={<IconSend />} size="normal" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
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

    <div className="v-spacer"></div>
    <Text size="title">ACCENT</Text>
    <div>
      <SolidButton icon={<IconLoad />} size="compact">
        BUTTON
      </SolidButton>
      <FlatButton size="compact">BUTTON</FlatButton>
      <FlatButton icon={<IconSend />} size="compact" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
      <SolidButton icon={<IconLoad />} size="normal">
        BUTTON
      </SolidButton>
      <FlatButton icon={<IconLoad />}>BUTTON</FlatButton>
      <FlatButton icon={<IconSend />} size="normal" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
      <SolidButton icon={<IconLoad />} size="large">
        BUTTON
      </SolidButton>
      <FlatButton size="large">BUTTON</FlatButton>
      <FlatButton icon={<IconSend />} size="large" outlined>
        BUTTON
      </FlatButton>
    </div>

    <div className="v-spacer"></div>
    <Text size="title">DANGER</Text>
    <div>
      <SolidButton variant="danger" icon={<IconLoad />} size="compact">
        BUTTON
      </SolidButton>
      <FlatButton variant="danger" size="compact">
        BUTTON
      </FlatButton>
      <FlatButton variant="danger" icon={<IconSend />} size="compact" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
      <SolidButton variant="danger" icon={<IconLoad />} size="normal">
        BUTTON
      </SolidButton>
      <FlatButton variant="danger" icon={<IconLoad />}>
        BUTTON
      </FlatButton>
      <FlatButton variant="danger" icon={<IconSend />} size="normal" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
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

    <div className="v-spacer"></div>
    <Text size="title">WARNING</Text>
    <div>
      <SolidButton variant="warning" icon={<IconLoad />} size="compact">
        BUTTON
      </SolidButton>
      <FlatButton variant="warning" size="compact">
        BUTTON
      </FlatButton>
      <FlatButton variant="warning" icon={<IconSend />} size="compact" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
      <SolidButton variant="warning" icon={<IconLoad />} size="normal">
        BUTTON
      </SolidButton>
      <FlatButton variant="warning" icon={<IconLoad />}>
        BUTTON
      </FlatButton>
      <FlatButton variant="warning" icon={<IconSend />} size="normal" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
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

    <div className="v-spacer"></div>
    <Text size="title">SUCCESS</Text>
    <div>
      <SolidButton variant="success" icon={<IconLoad />} size="compact">
        BUTTON
      </SolidButton>
      <FlatButton variant="success" size="compact">
        BUTTON
      </FlatButton>
      <FlatButton variant="success" icon={<IconSend />} size="compact" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
      <SolidButton variant="success" icon={<IconLoad />} size="normal">
        BUTTON
      </SolidButton>
      <FlatButton variant="success" icon={<IconLoad />}>
        BUTTON
      </FlatButton>
      <FlatButton variant="success" icon={<IconSend />} size="normal" outlined>
        BUTTON
      </FlatButton>
    </div>
    <div className="v-spacer"></div>
    <div>
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

    <div className="v-spacer"></div>
    <Text size="title">FLOATING ACTION BUTTONS</Text>
    <Card classes={["fab-group"]}>
      <FloatingActionButton
        classes={["App__send-button"]}
        size="large"
        variant="accent"
        icon={<IconSend />}
        onClick={() => null}
        disabled
      />
      <FloatingActionButton
        classes={["App__send-button"]}
        size="large"
        variant="plain"
        icon={<IconSend />}
        onClick={() => null}
      >
        Ipsum
      </FloatingActionButton>
      <FloatingActionButton
        classes={["App__send-button"]}
        size="large"
        variant="accent"
        icon={<IconSend />}
        onClick={() => null}
      />
      <FloatingActionButton
        classes={["App__send-button"]}
        size="large"
        variant="danger"
        icon={<IconSend />}
        onClick={() => null}
      />
      <FloatingActionButton
        classes={["App__send-button"]}
        size="large"
        variant="warning"
        icon={<IconSend />}
        onClick={() => null}
      />
      <FloatingActionButton
        classes={["App__send-button"]}
        size="large"
        variant="success"
        icon={<IconSend />}
        onClick={() => null}
      />
    </Card>
  </>
);
