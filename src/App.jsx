import { IconSend, IconServer, IconLoad, IconUsers } from "./icons";
import { useState } from "react";
import {
  Card,
  CheckBox,
  FlatButton,
  FloatingActionButton,
  LabeledText,
  Selector,
  SolidButton,
  Switch,
  TextField,
  Text,
} from "./lib";
import "./App.scss";

const App = () => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

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
        <TextField
          onChange={(value) => {
            if (value.includes("a")) return false;
          }}
          placeholder="Prova"
        />
        <hr />
        <CheckBox
          checked={false}
          label="Finche la barca và"
          labelPosition="left"
          onChange={(event) =>
            console.log(`checkbox is ${event.target.checked}`)
          }
        />
        <hr />
        <Card>
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
            onChange={(value) => {
              if (value.length === 5) return false;
            }}
          />
          <hr />
          <CheckBox
            checked={false}
            onChange={(e) => console.log(e.target.checked)}
          />
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
        <CheckBox checked={false} label="Test" />
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
          <TextField onChange={() => null} />
          <hr />
          <CheckBox checked={false} />
          <hr />
          <LabeledText label="Prova" text="Qualcosa da scrivere" />
        </Card>
        <FloatingActionButton
          classNames={["App__send-button"]}
          size="large"
          icon={<IconSend />}
        />
      </div>
    </div>
  );
};

export { App };
