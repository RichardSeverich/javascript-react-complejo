// React
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
// OTHERS
import NavigationBar from "./../../nav-bar/NavigationBar";
import FormInput from "./../../common/FormInput";
import i18n from "./../../../i18n/i18n";
import useInput from "./../../hooks/UseInput";
import handleValidations from "./HandleValidations";

const DateSelect = (props) => {

  const colorFormReset = {
    date: "",
  }

  // Declare constant
  const [isRegistry, setIsRegistry] = useState(props.location.state.isRegistry);
  const [colorFormText, setColorFormText] = useState(colorFormReset);
  const history = useHistory();

  //Variables
  let date = "";

  //get datas
  const { value: valueDate, bind: bindDate } = useInput(date);

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setIsRegistry(props.location.state.isRegistry);
    }
    return () => { 
      window.location.reload();
      isMounted = false };
  }, [props]);

  //change page and validate
  const handleNavegate = () => {
    let body = {
      date: valueDate,
    }
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid){
      let pathRegistry =  "/bills-date-users";
      let pathShow =  "/bills-date-bills";
      let  path = isRegistry ? pathRegistry : pathShow;
      history.push({ 
        pathname: path,
        state: {
          dateReserve: valueDate,
          isRegistry
        }
      })   
    }
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-5">
        <div className="card">
          <div className="card-header">
            <h3 align="center">{ isRegistry 
              ? i18n.billsForm.formRegistryBillsTitle 
              : i18n.billsForm.formShowBillsTitle }</h3>
            <h4 align="center">{isRegistry 
              ? i18n.billsForm.reservedDateTitle
              : i18n.billsForm.billDateTitle}</h4>
          </div>
          <div className="card-body">
            <FormInput
              labelContent={isRegistry 
                ? i18n.billsForm.formLabelReservedDate
                : i18n.billsForm.formLabelBillDate}
              formText={isRegistry 
                ? i18n.billsForm.formTextReservedDate
                : i18n.billsForm.formTextBillDate}
              color={colorFormText.date}
              type="date"
              bind={bindDate}
            ></FormInput>
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={handleNavegate}
                type="button" >
                {i18n.common.ButtonSelect}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
