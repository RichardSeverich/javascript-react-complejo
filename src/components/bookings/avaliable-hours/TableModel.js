import React from 'react';
import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../i18n/i18n";

const getTableModel = (handleAdd) => {

  const columns = [
    {
      dataField: 'id',
      text: i18n.hoursTable.headerId,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'name',
      text: i18n.hoursTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.hoursTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.hoursTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.hoursTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'updatedBy',
      text: i18n.hoursTable.headerUpdatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'add',
      text: i18n.common.ButtonRegistration,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
      <button
        className="btn btn-success"
        onClick={() => handleAdd(row)}
      >
        {i18n.common.ButtonRegistration}
      </button>
      ),
    },
  ];
  return columns;
}

export default getTableModel;
