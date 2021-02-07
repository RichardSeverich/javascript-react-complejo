import React from "react";
import ButtonDropDown from "./ButtonDropDown";

const buttons = (props) => {
  return props.buttonsArray.map((button, index) => {
    return (
      <ButtonDropDown
        key={index}
        navigate={button.navigate}
        ButtonContent={button.ButtonContent}
      >
      </ButtonDropDown>
    );
  })
}

const ButtonGroup = (props) => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-dark dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.buttonGroupTitle}
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        {buttons(props)}
      </div>
    </div>
  );
};

export default ButtonGroup;
