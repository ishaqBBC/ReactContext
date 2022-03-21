import React, { useContext } from "react";

export default ({ name }) => {
  const thing = useContext();
  return <h1>This is a thing {thing}</h1>;
};
