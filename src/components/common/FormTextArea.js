import React from "react";

const FormTextArea = (props) => {

  return (
    <div className="form-group row">
      <label className="col-sm-3 control-label">{props.labelContent}</label>
      <div className="col-sm-9">
        <textarea
          className="form-control"
          type={props.type}
          minLength={props.minLength}
          maxLength={props.maxLength}
          {...props.bind}
        ></textarea>
        <small className={"form-text text-" + props.color}>{props.formText}</small>
      </div>
    </div>
  );
};

export default FormTextArea;
