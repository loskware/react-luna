/* import { IconSend, IconServer, IconLoad, IconUsers, IconSearch } from "../icons";
import React, { useState } from "react";
import {
  Card,
  CheckBox,
  Draggable,
  FlatButton,
  FloatingActionButton,
  LabeledText,
  Selector,
  SolidButton,
  Switch,
  TextField,
  Text,
} from "../lib";
import "./Buttons.css";

const App = () => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [showDraggable, setShowDraggable] = useState(true);

  return (
    <div className="App">
      <div className="light-theme">
        <Text color="accent" size="title" weight={700}>
          Titolo
        </Text>
        <hr />
        <div>
          <Selector
            name="prova1"
            selected={selectedTab}
            onChange={(selected) => setSelectedTab(selected)}
          >
            {{ title: "Users", icon: <IconUsers /> }}
            {{ icon: <IconServer /> }}
            {{ icon: <IconSend /> }}
          </Selector>
        </div>
        <hr />
        <div>
          <SolidButton icon={<IconLoad />} size="compact" disabled>
            Button
          </SolidButton>
          <FlatButton size="compact" disabled>
            Button
          </FlatButton>
          <FlatButton icon={<IconSend />} size="compact" outlined disabled>
            Button
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
        <div>
          <Switch
            checked={switchChecked}
            onChange={(checked) => setSwitchChecked(checked)}
          />
          <Switch
            checked={switchChecked}
            onChange={(checked) => setSwitchChecked(checked)}
            size="large"
          />
          <Switch
            checked={switchChecked}
            onChange={(checked) => setSwitchChecked(checked)}
            size="xlarge"
          />
        </div>
        <hr />
        <TextField
          onChange={(value) => {
            if (value.includes("a")) return false;
          }}
          placeholder="Prova"
          leadingIcon={<IconSearch />}
          trailingIcon={<IconSearch />}
        />
        <hr />
        <CheckBox
          label="Finche la barca v??"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
        <hr />
        <Card hasShadow>
          <Text color="accent" size="title" weight={700}>
            Titolo
          </Text>
          <hr />
          <Selector
            name="prova2"
            selected={selectedTab}
            onChange={(selected) => setSelectedTab(selected)}
          >
            {{ icon: <IconUsers /> }}
            {{ icon: <IconServer /> }}
            {{ icon: <IconSend /> }}
          </Selector>
          <hr />
          <div>
            <SolidButton icon={<IconLoad />} size="compact" disabled>
              Button
            </SolidButton>
            <FlatButton size="compact" disabled>
              Button
            </FlatButton>
            <FlatButton icon={<IconSend />} size="compact" outlined disabled>
              Button
            </FlatButton>
          </div>
          <hr />
          <div>
            <SolidButton icon={<IconLoad />} size="normal">
              Button
            </SolidButton>
            <FlatButton size="normal">Button</FlatButton>
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
          <div>
            <Switch
              checked={switchChecked}
              onChange={(checked) => setSwitchChecked(checked)}
            >
              <IconSend />
            </Switch>
            <Switch
              checked={switchChecked}
              onChange={(checked) => setSwitchChecked(checked)}
              size="large"
            >
              <IconSend />
            </Switch>
            <Switch
              checked={switchChecked}
              onChange={(checked) => setSwitchChecked(checked)}
              size="xlarge"
            >
              <IconSend />
            </Switch>
          </div>
          <hr />
          <TextField
            large
            onChange={(value) => {
              if (value.length === 5) return false;
            }}
          />
          <hr />
          <CheckBox onChange={(e) => console.log(e.target.checked)} />
          <hr />
          <LabeledText label="Prova" text="Qualcosa da scrivere" />
        </Card>
        <FloatingActionButton
          classNames={["App__send-button"]}
          size="large"
          icon={<IconSend />}
          onClick={() => null}
        />
      </div>
      <div></div>

      <div className="dark-theme">
        <Text color="accent" size="title" weight={700}>
          Titolo
        </Text>
        <hr />
        <div>
          <Selector
            name="prova3"
            selected={selectedTab}
            onChange={(selected) => setSelectedTab(selected)}
          >
            {{ icon: <IconUsers /> }}
            {{ icon: <IconServer /> }}
            {{ icon: <IconSend /> }}
          </Selector>
        </div>
        <hr />
        <div>
          <SolidButton icon={<IconLoad />} size="compact" disabled>
            Button
          </SolidButton>
          <FlatButton size="compact" disabled>
            Button
          </FlatButton>
          <FlatButton icon={<IconSend />} size="compact" outlined disabled>
            Button
          </FlatButton>
        </div>
        <hr />
        <div>
          <SolidButton icon={<IconLoad />} size="normal">
            Button
          </SolidButton>
          <FlatButton size="normal">Button</FlatButton>
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
        <div>
          <Switch
            checked={switchChecked}
            onChange={(checked) => setSwitchChecked(checked)}
          />
          <Switch
            checked={switchChecked}
            onChange={(checked) => setSwitchChecked(checked)}
            size="large"
          />
          <Switch
            checked={switchChecked}
            onChange={(checked) => setSwitchChecked(checked)}
            size="xlarge"
          />
        </div>
        <hr />
        <TextField placeholder="Prova" onChange={() => null} />
        <hr />
        <CheckBox label="Test" />
        <hr />
        <Card>
          <Text color="accent" size="title" weight={700}>
            Titolo
          </Text>
          <hr />
          <Selector
            name="prova4"
            selected={selectedTab}
            onChange={(selected) => setSelectedTab(selected)}
          >
            {{ icon: <IconUsers /> }}
            {{ icon: <IconServer /> }}
            {{ icon: <IconSend /> }}
          </Selector>
          <hr />
          <div>
            <SolidButton icon={<IconLoad />} size="compact" disabled>
              Button
            </SolidButton>
            <FlatButton size="compact" disabled>
              Button
            </FlatButton>
            <FlatButton icon={<IconSend />} size="compact" outlined disabled>
              Button
            </FlatButton>
          </div>
          <hr />
          <div>
            <SolidButton icon={<IconLoad />} size="normal">
              Button
            </SolidButton>
            <FlatButton size="normal">Button</FlatButton>
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
          <div>
            <Switch
              checked={switchChecked}
              onChange={(checked) => setSwitchChecked(checked)}
            >
              <IconSend />
            </Switch>
            <Switch
              checked={switchChecked}
              onChange={(checked) => setSwitchChecked(checked)}
              size="large"
            >
              <IconSend />
            </Switch>
            <Switch
              checked={switchChecked}
              onChange={(checked) => setSwitchChecked(checked)}
              size="xlarge"
            >
              <IconSend />
            </Switch>
          </div>
          <hr />
          <TextField
            large
            onChange={() => null}
            leadingIcon={<IconSearch />}
            trailingIcon={<IconSearch />}
          />
          <hr />
          <CheckBox />
          <hr />
          <LabeledText label="Prova" text="Qualcosa da scrivere" />
        </Card>
        <FloatingActionButton
          classNames={["App__send-button"]}
          size="large"
          icon={<IconSend />}
          onClick={() => setShowDraggable(!showDraggable)}
        />
      </div>
      <div className="drag-test">
        {
          showDraggable && <Draggable></Draggable>
        }
      </div>
    </div>
  );
};

export { App };
 */