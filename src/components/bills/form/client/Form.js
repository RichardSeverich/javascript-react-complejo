// React
import React, { useState } from "react";
import { useHistory } from "react-router";
// Components
import useInput from "./../../../hooks/UseInput";
import FormInput from "./../../../common/FormInput";
import i18n from "./../../../../i18n/i18n";
import handleValidations from "./HandleValidations";
import { handleCreate } from "./../../../handle/HandleManager";

const Form = (props) => {

  const colorFormReset = {
    nit: "",
    name: "",
  }

  const [user] = useState(props.user);
  const [bookingDate] = useState(props.bookingDate);
  const [arrayBookings] = useState(props.arrayBookings);
  const [colorFormText, setColorFormText] = useState(colorFormReset);
  const history = useHistory();

  const { value: valueNit, bind: bindNit } = useInput(user.dni);
  const { value: valueName, bind: bindName } = useInput(user.fatherLastName);

  //change page and validate
  const handleNavegate = () => {
    let path = "/bills-date-users";
    history.push({ 
      pathname: path,
      state: {
        dateReserve: bookingDate,
      }
    })   
  };

  const handleAdd = () => {
    //Today Date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    //Today sum 3 months
    let dateLimit = new Date();
    dateLimit.setMonth(dateLimit.getMonth() + 3);
    dd = String(dateLimit.getDate()).padStart(2, '0');
    mm = String(dateLimit.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = dateLimit.getFullYear();
    dateLimit = yyyy + '-' + mm + '-' + dd;
    //Body
    const username = window.localStorage.getItem("username");
    let body = {
      billsDate: today,
      billsDateLimit: dateLimit,
      billsControlCode: "EO-89-C4-A2",
      bookingDate: bookingDate,
      companyName: "COE - Circulo de Oficiales del Ejercito",
      companyNit: "123456789",
      companyAuthorization: "2-4001-57944",
      clientName: valueName,
      clientNit: valueNit,
      createdBy: username,
      updatedBy: username,
      arrayBookings
    }
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid){
      handleCreate("bills/", body, handleNavegate);
    }
  };

  return (
    <div>
      <div className="container col-md-5">
        <div className="card">
          <div className="card-header">
            <h4 align="center">{i18n.billsForm.formTitleClient}</h4>
          </div>
          <div className="card-body">
            <form className="">
              <FormInput
                labelContent={i18n.billsForm.formLabelNitCi}
                formText={i18n.billsForm.formTextNitCi}
                color={colorFormText.nit}
                minLength="3"
                maxLength="15"
                bind={bindNit}
              ></FormInput>
              <FormInput
                labelContent={i18n.billsForm.formLabelName} 
                formText={i18n.billsForm.formTextName}
                color={colorFormText.name}
                minLength="3"
                maxLength="30"
                bind={bindName}
              ></FormInput>
              <div className="text-center">
                <button
                  className="btn btn-success"
                  onClick={handleNavegate, handleAdd}
                  type="button" >
                  {i18n.billsForm.buttonRegister}
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
