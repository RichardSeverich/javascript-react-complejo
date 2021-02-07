import React from "react";

const ButtonDropDown= (props) => {
  return (
    <button
      onClick={props.navigate}
      className="dropdown-item"
      type="button"
    >
      {props.ButtonContent}
    </button>
  );
}

export default ButtonDropDown;
