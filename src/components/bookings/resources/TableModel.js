import React from 'react';
import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../i18n/i18n";

const getTableModel = (navigate) => {

  const columns = [
    {
      dataField: 'id',
      text: i18n.resourceTable.headerId,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'name',
      text: i18n.resourceTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '360px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.resourceTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.resourceTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.resourceTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'updatedBy',
      text: i18n.resourceTable.headerUpdatedBy,
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
        onClick={() => navigate(row)}
      >
        {i18n.common.ButtonSelect}
      </button>
      ),
    },
  ];
  return columns;
}

export default getTableModel;
