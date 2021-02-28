// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../../nav-bar/NavigationBar";
import CommonTable from "./../../common/CommonTable";
import Loading from "./../../common/Loading"
import i18n from "./../../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGet} from "./../../handle/HandleManager";
import "./../../common/Table.css";

const Table = (props) => {

  // Declare constant
  const [isRegistry, setIsRegistry] = useState(props.location.state.isRegistry);
  const [arrayData, setArrayData] = useState();
  const history = useHistory();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    setIsRegistry(props.location.state.isRegistry);
    if (isMounted) {
      handleGet("resources/", setArrayData);
    }
    return () => { 
      window.location.reload();
      isMounted = false };
  }, [props]);

  const navigate= (row) => {
    let pathRegistry =  "/bookings-resources-date";
    let pathShow =  "/bookings-resources-date";
    let  path = isRegistry ? pathRegistry : pathShow;
    history.push({ 
      pathname: path,
      state: { 
        data: row ,
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
            <h3 align="center">{ isRegistry 
              ? i18n.common.TitleBookingsResourcesRegistry 
              : i18n.common.TitleBookingsResourcesShow }
            </h3>
            <h4 align="center">{i18n.resourceTable.tableTitle}</h4>
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
