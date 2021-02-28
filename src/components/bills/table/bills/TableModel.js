import React from 'react';
import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../../i18n/i18n";

const getTableModel = (navigate) => {

  const columns = [
    {
      dataField: 'id',
      text: i18n.billsTable.headerId,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'companyName',
      text: i18n.billsTable.headerCompanyName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '200px'
      }
    },
    {
      dataField: 'companyNit',
      text: i18n.billsTable.headerCompanyNit,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'companyAuthorization',
      text: i18n.billsTable.headerCompanyAuthorization,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'clientName',
      text: i18n.billsTable.headerClientName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'clientNit',
      text: i18n.billsTable.headerClientNit,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'billsControlCode',
      text: i18n.billsTable.headerControlCode,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
      }
    }, 
    {
      dataField: 'bookingDate',
      text: i18n.billsTable.headerBookingDate,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
      }
    }, 
    {
      dataField: 'billsDateLimit',
      text: i18n.billsTable.headerLimitDate,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.billsTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.billsTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'add',
      text: i18n.common.ButtonSelect,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
      <button
        className="btn btn-success"
        onClick={() => navigate(row)}
      >
        {i18n.common.ButtonSelect}
      </button>
      ),
    }
  ];
  return columns;
}

export default getTableModel;
