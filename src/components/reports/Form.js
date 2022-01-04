import React from "react";
import FormInput from "./../common/FormInput";
import i18n from "./../../i18n/i18n";

const Form = (props) => {
  return (
    <div className="container col-md-4 position-relative">
      <div className="card">
        <div className="card-header">
          <h3 align="center">{i18n.reportsRevenueForm.TitleReportsRevenue}</h3>
        </div>
        <div className="card-body">
          <form className="">
            <FormInput
              labelContent={i18n.reportsRevenueForm.TitleReportsSelectDate} 
              formText={i18n.reportsRevenueForm.formTextYear}
              color={props.colorFormText.year}
              bind={props.bindYear}
            ></FormInput>
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={props.handleSerch}
                type="button" >
                Seleccionar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;