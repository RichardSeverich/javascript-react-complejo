import React from 'react';
import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../i18n/i18n";

const getTableModel = (handleDelete) => {

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
      dataField: 'hoursIntervalName',
      text: i18n.hoursTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '150px'
      }
    },
    {
      dataField: 'comments',
      text: i18n.hoursTable.headerComments,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.hoursTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.hoursTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
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
      dataField: 'billed',
      text: i18n.hoursTable.headerBilled,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '100px'
      }
    },
    {
      dataField: 'delete',
      text: i18n.hoursTable.delete,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
        <button
        className="btn btn-danger"
        onClick={() => handleDelete("bookings/", row.id)}
        >
          {i18n.hoursTable.delete}
        </button>
      ),
    }
  ];
  return columns;
}

export default getTableModel;
