// React
import React from "react";
//import PropTypes from "prop-types";
//Components
import Content from "./components/content/Content";
import "./App.css";

function App(props) {
  /*const propTypes = {
    children: PropTypes.object.isRequired,
  };*/
  const { children } = props;
  return (
    <div className="App">
      <Content body={children}></Content>
    </div>
  );
}

export default App;
