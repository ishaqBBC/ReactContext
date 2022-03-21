import { useState, useEffect, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

const UserContext = createContext([{}, (obj) => obj]);

const LevelTwo = () => {
  return <div> this is level two </div>;
};
const LevelOne = () => {
  const starsign = useContext(UserContext);
  return (
    <div>
      {starsign.starsign}
      this is level one
      <LevelTwo />
    </div>
  );
};

const App = ({ name }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 100);
    return () => clearTimeout(timer);
  }); //component did mount with no dependecies

  return (
    <UserContext.Provider
      value={{
        name: "ishaq",
        age: 27,
        starsign: "Leo"
      }}
    >
      <div onClick={() => setTime()}>
        {" "}
        {name}
        hello world {time.toLocaleTimeString()}
        <Hello />
        <LevelOne />
      </div>
    </UserContext.Provider>
  );
};

ReactDOM.render(
  <App name="ishaq khan" />,
  document.getElementById("container")
);
