import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Line, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble } from "react-chartjs-2"

const BuildGrafic = (typeGrafic) => {
  var Result;
  switch (typeGrafic){
    case "Barra":
      Result = Bar;
      break;
    case "Línea":
      Result = Line;
      break;
    case "Pastel": 
      Result = Pie;
      break;
    case "Rosquilla": 
      Result = Doughnut;
      break;
    case "Area Polar": 
      Result = PolarArea;
      break;
    case "Radar": 
      Result = Radar;
      break;
    case "Dispersión": 
      Result = Scatter;
      break;
    case "Burbuja": 
      Result = Bubble;
      break;
    default: 
      Result= Bar;
  }
  return Result;
};

export default BuildGrafic;