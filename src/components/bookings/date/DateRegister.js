// React
import React, { useState } from "react";
import { useHistory } from "react-router";
// OTHERS
import NavigationBar from "./../../nav-bar/NavigationBar";
import FormInput from "./../../common/FormInput";
import FormTextArea from "./../../common/FormTextArea";
import i18n from "./../../../i18n/i18n";
import useInput from "./../../hooks/UseInput";
import handleValidations from "./HandleValidations";

const DateRegister = (props) => {

  const colorFormReset = {
    date: "",
    comments: ""
  }

  // Declare constant
  const  [resource]  = useState(props.location.state.data);
  const  [isRegistry]  = useState(props.location.state.isRegistry);
  const [colorFormText, setColorFormText] = useState(colorFormReset);
  const history = useHistory();

  //Variables
  let date = "";
  let comments = "";

  //get datas
  const { value: valueDate, bind: bindDate } = useInput(date);
  const { value: valueComments, bind: bindComments } = useInput(comments);

  //change page and validate
  const handleNavegate = () => {
    let body = {
      date: valueDate,
      comments: valueComments,
      isRegistry
    }
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid){
      let pathRegistry =  "/bookings-resources-date-avaliable-hours";
      let pathShow =  "/bookings-resources-date-reserved-hours";
      let  path = isRegistry ? pathRegistry : pathShow;
      history.push({ 
        pathname: path,
        state: {
          resource,
          dateReserve: valueDate,
          comments: valueComments
        }
      })   
    }
  };

  const commentsBox = () => {
    if(isRegistry){
      return <FormTextArea
        labelContent={i18n.common.LabelComments}
        formText={i18n.common.formTextComments}
        color={colorFormText.comments}
        minLength="3"
        maxLength= "90"
        bind={bindComments}
      ></FormTextArea>
    }
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-5">
        <div className="card">
          <div className="card-header">
            <h3 align="center">{i18n.common.TitleBookingsSelectDate}</h3>
            <h4 align="center">{i18n.common.ResourceHeader + resource.name}</h4>
          </div>
          <div className="card-body">
            <FormInput
              labelContent={i18n.common.LabelDate}
              formText={i18n.common.formTextDate}
              color={colorFormText.date}
              type="date"
              bind={bindDate}
            ></FormInput>
            {commentsBox()}
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

export default DateRegister;
