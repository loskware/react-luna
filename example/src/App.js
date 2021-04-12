import logo from "./logo.svg";
import "./App.css";
import { Avatar } from "react-luna";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Avatar
        src="https://www.montoriosrl.it/assets/images/avatar-ea.svg"
        size={50}
      />
    </div>
  );
}

export default App;
