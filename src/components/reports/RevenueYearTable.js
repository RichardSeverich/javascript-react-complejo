import React from "react";
import CommonTable from "./../common/CommonTableNoPaging";
import i18n from "./../../i18n/i18n";
import getTableModel from "./TableModel";
import Loading from "./../common/Loading"

const RevenueYearTable = (props) => {
  
  return (
    <div>
    <div className="container col-md-7">
      <div className="card card-table">
        <div className="card-header">
          <h3 align="center">{i18n.reportsRevenueTable.tableTitle + " del Año " + props.year }</h3>
        </div>
        <div className="card-body card-body-table">
        {props.arrayData?
          <CommonTable 
            arrayData={props.arrayData} 
            columns={getTableModel()}
            >
          </CommonTable>:<Loading/>}
        </div>
      </div>
    </div>
    </div>
  );
};

export default RevenueYearTable;