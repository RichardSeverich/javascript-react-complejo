import React, { useState } from "react";
import NavigationBar from "./../nav-bar/NavigationBar";
import { handleGet } from "./../handle/HandleManager";
import useInput from "./../hooks/UseInput";
import handleValidations from "./HandleValidations";
import Form from "./Form"
import RevenueYearTable from "./RevenueYearTable";
import RevenueYearGrafic from "./RevenueYearGrafic";

const { REACT_APP_MOCK_DATA } = process.env;
const isMockDisable = REACT_APP_MOCK_DATA === "FALSE";

const RevenueYear = () => {
  const [show, setShow] = useState("Tabla");
  const [showForm, setShowForm] = useState(true);
  const [arrayData, setArrayData] = useState();
  const [totalRevenue, setTotalRevenue] = useState();
  
  const colorFormReset = {
    year: "",
  }

  const [colorFormText, setColorFormText] = useState(colorFormReset);
  
  let year = "";
  const { value: valueYear, bind: bindYear, reset: resetYear } = useInput(year);

  const handleSerch = () => {
    let body = {
      year: valueYear
    }
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid && isMockDisable){
        handleGet("reports-revenue/"+valueYear, setArrayData);
        setShowForm(false)
    } else if(isValid && !isMockDisable){
      handleGet("reports-revenue/", setArrayData);
      setShowForm(false)
    }
  };

  const buttonChangeYear = () => {
    setShowForm(true)
    resetYear()
    setTotalRevenue()
  }

  const generateButtons = showForm?
      <div className="container col-md-11">
        <div className="btn-group float-right">
          <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {show}
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item" type="button" onClick={() => setShow("Tabla")}>Tabla</button>
            <button className="dropdown-item" type="button" onClick={() => setShow("Grafico")}>Grafico</button>
          </div>
        </div>
      </div>
    :
      <div className="container col-md-11">
        <button type="button" className="btn btn-info float-left" onClick={buttonChangeYear}>Cambiar año</button>

        <div className="btn-group float-right">
          <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {show}
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item" type="button" onClick={() => setShow("Tabla")}>Tabla</button>
            <button className="dropdown-item" type="button" onClick={() => setShow("Grafico")}>Grafico</button>
          </div>
        </div>
      </div>

  const calculateRevenue = () =>{
    setTotalRevenue(arrayData.reduce((sum, value) => (sum + parseInt(value.revenue)), 0))
  }
  
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container"  style={{marginBottom: 80+"px"}}>{generateButtons}</div>
      {showForm? 
        <Form
          colorFormText={colorFormText}
          bindYear={bindYear}
          handleSerch={handleSerch}
        ></Form> 
      : show === "Tabla" ? 
        <div>
          <RevenueYearTable
            year={valueYear}
            arrayData={arrayData}
          />
          <button className="btn btn-info" type="button" onClick={calculateRevenue}>Calcular ingreso anual y promedio mensual</button>
        </div>
      : show === "Grafico" ? 
        <div>
          <RevenueYearGrafic
            year={valueYear}
            arrayData={arrayData}
          />
          <button className="btn btn-info" type="button" onClick={calculateRevenue}>Calcular ingreso anual y promedio mensual</button>
        </div>
      : "no se reconocio tabla ni grafico"}
      {totalRevenue? 
        <>
          <h4>Ingreso Total: {totalRevenue}</h4>
          <h4>Promedio Mensual: {totalRevenue/12}</h4>
        </>
      :<div/>}
    </div>
  );
};

export default RevenueYear;