// React
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../../../nav-bar/NavigationBar";
import CommonTable from "./../../../common/CommonTable";
import Loading from "./../../../common/Loading"
import i18n from "./../../../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGetWithBody, handleDelete } from "./../../../handle/HandleManager";
import "./../../../common/Table.css";
import FormClient from "./../../form/client/Form";

const Table = (props) => {

  // Declare constant
  const [isRegistry] = useState(props.location.state.isRegistry);
  const [dateReserve] = useState(props.location.state.dateReserve);
  const [user] = useState(props.location.state.user);
  const [bill] = useState(props.location.state.bill);
  const [arrayData, setArrayData] = useState();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if(isRegistry){
        let body = {
          bookingDate: dateReserve,
          userName: user.username
        }
        handleGetWithBody("reserved-resources/", body, setArrayData);
      } else {
        let body = {
          billDate: dateReserve,
          idBill: bill.id
        }
        handleGetWithBody("bills/detail/", body, setArrayData);
      }
    }
    return () => { 
      isMounted = false };
  }, [dateReserve, user, bill, isRegistry]);

  if (arrayData === undefined) {
    return <Loading></Loading>;
  }

  const userForm = () => {
    if(isRegistry){
      return <FormClient 
      user={user}
      arrayBookings={arrayData}
      bookingDate={dateReserve}
      isRegistry={isRegistry}
    />
    }
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-table">
          <div className="card-header">
            <h3 align="center">{ isRegistry 
                ? i18n.billsForm.formRegistryBillsTitle
                : i18n.billsForm.formShowBillsTitle }</h3>
            <h4 align="center">{ isRegistry 
                ? i18n.billsForm.formHeaderDate + dateReserve
                : i18n.billsForm.formHeaderBillDate + dateReserve }</h4>
            <h4 align="center">{isRegistry 
                ? i18n.billsForm.formHeaderUser + user.username
                : i18n.billsForm.formHeaderBillId + bill.id }</h4>
          </div>
          <div className="card-body card-body-table">
            <div className="space-bottom" >
            {userForm()}
            </div>
            <div>
              <div className="card card-table">
                <div className="card-header">
                  <h4 align="center">{i18n.billsForm.detail}</h4>
                </div>
              </div>
            </div>
            <CommonTable
              arrayData={arrayData} 
              columns={getTableModel(handleDelete, isRegistry)}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
