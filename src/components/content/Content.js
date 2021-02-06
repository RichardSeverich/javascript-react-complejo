// Dependencies
import React from "react";
//import PropTypes from "prop-types";

const Content = (props) => {
  /*const propTypes = {
    body: PropTypes.object.isRequired
  };*/
  const { body } = props;
  return <div className="Content">{body}</div>;
};

export default Content;
