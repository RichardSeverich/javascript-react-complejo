// React
import React, { useState } from "react";
// Components
import NavigationBar from "./../nav-bar/NavigationBar";
import useInput from "./../hooks/UseInput";
import FormInput from "./../common/FormInput";
import i18n from "./../../i18n/i18n";
import handleValidations from "./HandleValidations";
import { handleCreate, handleEdit } from "./../handle/HandleManager";

const Form = (props) => {

  const colorFormReset = {
    name: "",
    priceHour: "",
  }

  const [isEdit, setIsEdit] = useState(props.location.state);
  const [colorFormText, setColorFormText] = useState(colorFormReset);

  let id = isEdit ? isEdit.data.id : "";
  let name = isEdit ? isEdit.data.name : "";
  let priceHour = isEdit ? isEdit.data.priceHour : "";

  const { value: valueName, bind: bindName, reset: resetName } = useInput(name);
  const { value: valuePriceHour, bind: bindPriceHour, reset: resetPriceHour } = useInput(priceHour);

  const handleReset = () => {
    resetName();
    resetPriceHour();
  }

  const handleAdd = () => {
    const username = window.localStorage.getItem("username");
    let body = {
      name: valueName,
      priceHour: valuePriceHour,
      createdBy: username,
      updatedBy: username,
    }
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid){
      if(isEdit) {
        handleEdit("resources/", body, id, handleReset, setIsEdit)
      } else {
        handleCreate("resources/", body, handleReset);
      }
    }
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-4">
        <div className="card">
          <div className="card-header">
            <h3 align="center">{i18n.resourceForm.formTitle}</h3>
          </div>
          <div className="card-body">
            <form className="">
              <FormInput
                labelContent={i18n.resourceForm.formLabelName} 
                formText={i18n.resourceForm.formTextName}
                color={colorFormText.name}
                minLength="3"
                maxLength="30"
                bind={bindName}
              ></FormInput>
              <FormInput
                labelContent={i18n.resourceForm.formLabelPriceHour} 
                formText={i18n.resourceForm.formTextPriceHour}
                color={colorFormText.priceHour}
                minLength="2"
                bind={bindPriceHour}
              ></FormInput>
              <div className="text-center">
                <button
                  className="btn btn-success"
                  onClick={handleAdd}
                  type="button" >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
