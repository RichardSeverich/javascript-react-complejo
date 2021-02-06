import React from 'react';
import { textFilter, dateFilter, selectFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../i18n/i18n";

const getTableModel = (navigateForm, handleEdit, handleDelete) => {

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
      dataField: 'password',
      text: i18n.userTable.headerPassword,
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
      dataField: 'birthDate',
      text: i18n.userTable.headerBirthdate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'telephone',
      text: i18n.userTable.headerTelephone,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '180px'
      }
    },
    {
      dataField: 'address',
      text: i18n.userTable.headerAddress,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '250px'
      }
    },
    {
      dataField: 'email',
      text: i18n.userTable.headerEmail,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '250px'
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
      dataField: 'creationDate',
      text: i18n.userTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.userTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.userTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'updatedBy',
      text: i18n.userTable.headerUpdatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'edit',
      text: i18n.userTable.edit,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
      <button
        className="btn btn-warning"
        onClick={() => handleEdit(navigateForm, row)}
      >
        {i18n.userTable.edit}
      </button>
      ),
    },
    {
      dataField: 'delete',
      text: i18n.userTable.delete,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
        <button
        className="btn btn-danger"
        onClick={() => handleDelete("users/", row.id)}
        >
          {i18n.userTable.delete}
        </button>
      ),
    }
  ];
  return columns;
}

export default getTableModel;
