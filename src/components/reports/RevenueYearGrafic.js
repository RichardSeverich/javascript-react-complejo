import React, { useState } from "react";
import BuildGrafic from "./BuildGrafic";
import Loading from "./../common/Loading"

const grafics = ["Barra", "Línea"]

const RevenueYearGrafic = (props) => {
  const [typeGrafic, setTypeGrafic] = useState("Barra");

  let listGrafics=[];
  grafics.map((item, index)=>{
    listGrafics.push( <button key={index} className="dropdown-item" type="button" onClick={() => setTypeGrafic(item)}>{item}</button>)
  })

  const GraficTag = BuildGrafic(typeGrafic)

  return (
    <div className="container col-md-8">
      <div className="container col-md-12">
        <div className="btn-group float-left">
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {typeGrafic}
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            {listGrafics}
          </div>
        </div>
      </div>
      <div>
        {props.arrayData?
        <GraficTag
          data= {{
            datasets: [
              {
                label:"Ingresos del Año " + props.year,
                data: props.arrayData,
                backgroundColor: "rgba(75, 192, 12, 0.7)",
              }
            ]
          }}
          options= {{
            scales: {
              y: {
                  beginAtZero: true
              }
            },
            parsing: {
                xAxisKey: 'month',
                yAxisKey: 'revenue'
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 25
                        }
                    }
                }
            }
          }}
        height={70}
        width={120}
        />:<Loading/>}
      </div>
    </div>
  );
};

export default RevenueYearGrafic;