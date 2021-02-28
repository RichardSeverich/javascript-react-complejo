// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../../../nav-bar/NavigationBar";
import CommonTable from "./../../../common/CommonTable";
import Loading from "./../../../common/Loading"
import i18n from "./../../../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGetWithBody } from "./../../../handle/HandleManager";
import "./../../../common/Table.css";

const Table = (props) => {

  // Declare constant
  const [isRegistry] = useState(props.location.state.isRegistry);
  const [dateReserve] = useState(props.location.state.dateReserve);
  const [arrayData, setArrayData] = useState();
  const history = useHistory();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      let body = {
        billDate: dateReserve,
      }
      handleGetWithBody("bills/filter-date/", body, setArrayData);
    }
    return () => { isMounted = false };
  }, [dateReserve]);

  const navigate = (row) => {
    history.push({ 
      pathname: "/bills-date-bills-resources",
      state: { 
        bill: row,
        dateReserve,
        isRegistry
      }
    })
  }

  if (arrayData === undefined) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 align="center">{i18n.billsForm.formShowBillsTitle}</h3>
            <h4 align="center">{i18n.billsForm.formHeaderBillDate + dateReserve}</h4>
            <h4 align="center">{i18n.billsTable.tableTitle}</h4>
          </div>
          <div className="card-body card-body-table">
            <CommonTable 
              arrayData={arrayData}
              columns={getTableModel(navigate)}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
