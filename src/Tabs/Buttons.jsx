import { IconSend, IconLoad } from "../icons";
import React from "react";
import { FlatButton, FloatingActionButton, SolidButton, Text } from "../lib";
import "./Buttons.css";

export const Buttons = () => {
  return (
    <div className="Buttons split-screen">
      <div className="theme-light">
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
        <Text size="title">PRIMARY</Text>
        <div>
          <SolidButton variant="primary" icon={<IconLoad />} size="compact">
            BUTTON
          </SolidButton>
          <FlatButton variant="primary" size="compact">
            BUTTON
          </FlatButton>
          <FlatButton
            variant="primary"
            icon={<IconSend />}
            size="compact"
            outlined
          >
            BUTTON
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="primary" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="primary" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="primary"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="primary" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="primary" size="large">
            Button
          </FlatButton>
          <FlatButton
            variant="primary"
            icon={<IconSend />}
            size="large"
            outlined
          >
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
        <div className="fab-group">
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="accent"
            icon={<IconSend />}
            onClick={() => null}
            disabled
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="primary"
            icon={<IconSend />}
            onClick={() => null}
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="accent"
            icon={<IconSend />}
            onClick={() => null}
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="danger"
            icon={<IconSend />}
            onClick={() => null}
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="warning"
            icon={<IconSend />}
            onClick={() => null}
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="success"
            icon={<IconSend />}
            onClick={() => null}
          />
        </div>
      </div>

      <div className="theme-dark">
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
        <Text size="title">PRIMARY</Text>
        <div>
          <SolidButton variant="primary" icon={<IconLoad />} size="compact">
            BUTTON
          </SolidButton>
          <FlatButton variant="primary" size="compact">
            BUTTON
          </FlatButton>
          <FlatButton
            variant="primary"
            icon={<IconSend />}
            size="compact"
            outlined
          >
            BUTTON
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="primary" icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton variant="primary" icon={<IconLoad />}>
            Button
          </FlatButton>
          <FlatButton
            variant="primary"
            icon={<IconSend />}
            size="normal"
            outlined
          >
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton variant="primary" icon={<IconLoad />} size="large">
            Button
          </SolidButton>
          <FlatButton variant="primary" size="large">
            Button
          </FlatButton>
          <FlatButton
            variant="primary"
            icon={<IconSend />}
            size="large"
            outlined
          >
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
        <div className="fab-group">
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="accent"
            icon={<IconSend />}
            onClick={() => null}
            disabled
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="primary"
            icon={<IconSend />}
            onClick={() => null}
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="accent"
            icon={<IconSend />}
            onClick={() => null}
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="danger"
            icon={<IconSend />}
            onClick={() => null}
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="warning"
            icon={<IconSend />}
            onClick={() => null}
          />
          <FloatingActionButton
            classNames={["App__send-button"]}
            size="large"
            variant="success"
            icon={<IconSend />}
            onClick={() => null}
          />
        </div>
      </div>
    </div>
  );
};
