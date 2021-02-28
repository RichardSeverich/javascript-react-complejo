// React
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../../nav-bar/NavigationBar";
import CommonTable from "./../../common/CommonTable";
import Loading from "./../../common/Loading";
import i18n from "./../../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGetWithBody, handleCreate } from "./../../handle/HandleManager";
import "./../../common/Table.css";

const Table = (props) => {

  // Get Datas
  const [resource] = useState(props.location.state.resource);
  const [dateReserve] = useState(props.location.state.dateReserve);
  const [comments] = useState(props.location.state.comments);
  const [arrayData, setArrayData] = useState();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      let body = {
        idResource: resource.id,
        bookingDate: dateReserve,
      }
      handleGetWithBody("hours-interval/filter-avaliable/", body, setArrayData);
    }
    return () => { isMounted = false };
  }, [resource, dateReserve]);

  if (arrayData === undefined) {
    return <Loading></Loading>;
  }

  const handleReset = () => {window.location.reload();};
  const handleAdd = (row) => {
    const username = window.localStorage.getItem("username");
    let body = {
      idResource: resource.id,
      idHoursInterval: row.id,
      bookingDate: dateReserve,
      comments: comments,
      createdBy: username,
      updatedBy: username,
    }
    handleCreate("bookings/", body, handleReset);
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 align="center">{i18n.hoursTable.tableTitleAvaliable}</h3>
            <h4 align="center">{i18n.common.ResourceHeader + resource.name}</h4>
            <h4 align="center">{i18n.common.DateHeader + dateReserve}</h4>
            <h4 align="center">{i18n.common.CommentsHeader + comments}</h4>
          </div>
          <div className="card-body card-body-table">
            <CommonTable 
              arrayData={arrayData} 
              columns={getTableModel(handleAdd)}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
