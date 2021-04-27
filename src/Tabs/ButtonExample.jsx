import { IconSend, IconLoad } from "../icons";
import React from "react";
import {
  Card,
  FlatButton,
  FloatingActionButton,
  SolidButton,
  Text,
} from "../lib";

export const ButtonExample = () => {
  return (
    <div className="ButtonExample split-screen">
      <section id="secHead" className="theme-light">
        <Text size="title">DISABLED</Text>
        <div>
          <SolidButton icon={<IconLoad />} disabled>
            Button
          </SolidButton>
          <FlatButton disabled>Button</FlatButton>
          <FlatButton icon={<IconSend />} outlined disabled>
            Button
          </FlatButton>
        </div>

        <hr />
        <Text size="title">PLAIN</Text>
        <div>
          <SolidButton variant="plain" icon={<IconLoad />} size="compact">
            BUTTON
          </SolidButton>
          <FlatButton variant="plain" size="compact">
            BUTTON
          </FlatButton>
          <FlatButton
            variant="plain"
            icon={<IconSend />}
            size="compact"
            outlined
          >
            BUTTON
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="plain" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="plain" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="plain"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="plain" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="plain" size="large">
            Button
          </FlatButton>
          <FlatButton variant="plain" icon={<IconSend />} size="large" outlined>
            Button
          </FlatButton>
        </div>

        <hr />
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
        <hr />
        <div>
          <SolidButton icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton icon={<IconLoad />}>Button</FlatButton>
          <FlatButton icon={<IconSend />} size="normal" outlined>
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton size="large">Button</FlatButton>
          <FlatButton icon={<IconSend />} size="large" outlined>
            Button
          </FlatButton>
        </div>

        <hr />
        <Text size="title">DANGER</Text>
        <div>
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
        </div>
        <hr />
        <div>
          <SolidButton variant="danger" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="danger" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="danger"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="danger" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="danger" size="large">
            Button
          </FlatButton>
          <FlatButton
            variant="danger"
            icon={<IconSend />}
            size="large"
            outlined
          >
            Button
          </FlatButton>
        </div>

        <hr />
        <Text size="title">WARNING</Text>
        <div>
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
        </div>
        <hr />
        <div>
          <SolidButton variant="warning" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="warning" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="warning"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="warning" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="warning" size="large">
            Button
          </FlatButton>
          <FlatButton
            variant="warning"
            icon={<IconSend />}
            size="large"
            outlined
          >
            Button
          </FlatButton>
        </div>

        <hr />
        <Text size="title">SUCCESS</Text>
        <div>
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
        </div>
        <hr />
        <div>
          <SolidButton variant="success" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="success" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="success"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="success" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="success" size="large">
            Button
          </FlatButton>
          <FlatButton
            variant="success"
            icon={<IconSend />}
            size="large"
            outlined
          >
            Button
          </FlatButton>
        </div>

        <hr />
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
      </section>

      <section className="theme-dark">
        <Text size="title">DISABLED</Text>
        <div>
          <SolidButton icon={<IconLoad />} disabled>
            Button
          </SolidButton>
          <FlatButton disabled>Button</FlatButton>
          <FlatButton icon={<IconSend />} outlined disabled>
            Button
          </FlatButton>
        </div>

        <hr />
        <Text size="title">PLAIN</Text>
        <div>
          <SolidButton variant="plain" icon={<IconLoad />} size="compact">
            BUTTON
          </SolidButton>
          <FlatButton variant="plain" size="compact">
            BUTTON
          </FlatButton>
          <FlatButton
            variant="plain"
            icon={<IconSend />}
            size="compact"
            outlined
          >
            BUTTON
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="plain" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="plain" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="plain"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="plain" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="plain" size="large">
            Button
          </FlatButton>
          <FlatButton variant="plain" icon={<IconSend />} size="large" outlined>
            Button
          </FlatButton>
        </div>

        <hr />
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
        <hr />
        <div>
          <SolidButton icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton icon={<IconLoad />}>Button</FlatButton>
          <FlatButton icon={<IconSend />} size="normal" outlined>
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton size="large">Button</FlatButton>
          <FlatButton icon={<IconSend />} size="large" outlined>
            Button
          </FlatButton>
        </div>

        <hr />
        <Text size="title">DANGER</Text>
        <div>
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
        </div>
        <hr />
        <div>
          <SolidButton variant="danger" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="danger" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="danger"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="danger" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="danger" size="large">
            Button
          </FlatButton>
          <FlatButton
            variant="danger"
            icon={<IconSend />}
            size="large"
            outlined
          >
            Button
          </FlatButton>
        </div>

        <hr />
        <Text size="title">WARNING</Text>
        <div>
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
        </div>
        <hr />
        <div>
          <SolidButton variant="warning" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="warning" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="warning"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="warning" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="warning" size="large">
            Button
          </FlatButton>
          <FlatButton
            variant="warning"
            icon={<IconSend />}
            size="large"
            outlined
          >
            Button
          </FlatButton>
        </div>

        <hr />
        <Text size="title">SUCCESS</Text>
        <div>
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
        </div>
        <hr />
        <div>
          <SolidButton variant="success" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="success" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="success"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="success" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="success" size="large">
            Button
          </FlatButton>
          <FlatButton
            variant="success"
            icon={<IconSend />}
            size="large"
            outlined
          >
            Button
          </FlatButton>
        </div>

        <hr />
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
          />
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
          >
            Lorem
          </FloatingActionButton>
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
            href="#secHead"
            onClick={() => null}
          />
        </Card>
      </section>
    </div>
  );
};
