import React from 'react';
import { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../../i18n/i18n";

const getTableModel = (navigate) => {

  const selectOptionsType = {
    admin: 'admin',
    lawyer: 'lawyer'
  };

  const columns = [
    {
      dataField: 'id',
      text: i18n.userTable.headerId,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'username',
      text: i18n.userTable.headerUsername,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'dni',
      text: i18n.userTable.headerDni,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'name',
      text: i18n.userTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'fatherLastName',
      text: i18n.userTable.headerFatherLastName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'motherLastName',
      text: i18n.userTable.headerMotherLastName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    }, 
    {
      dataField: 'type',
      text: i18n.userTable.headerType,
      sort: true,
      filter: selectFilter({
        options: selectOptionsType
      }),
      headerStyle: {
        width: '140px'
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
