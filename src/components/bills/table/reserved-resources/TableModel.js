import React from 'react';
import { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../../../i18n/i18n";

const getTableModel = (handleDelete, isRegistry) => {

  const deleteBillDetail = () => {
    console.log("isRegistry");
    console.log(isRegistry);
    if(!(isRegistry)){
      return {
          dataField: 'delete',
          text: i18n.userTable.delete,
          headerStyle: {
            width: '120px'
          },
        formatter: (cell, row, rowIndex) => (
            <button
              className="btn btn-danger"
              onClick={() => handleDelete("bills-detail/", row.id)}
            >
            {i18n.userTable.delete}
          </button>
        ),
      }
    }
    return {
      dataField: '',
      text: '',
    };
  }

  const columns = [
    {
      dataField: 'id',
      text: i18n.reportsRevenueTable.headerId,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        
        width: '180px'
      }
    },
    {
      dataField: 'comments',
      text: i18n.reportsRevenueTable.headerComments,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '280px'
      }
    },
    {
      dataField: 'resourceName',
      text: i18n.reportsRevenueTable.headerNameResource,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '280px'
      }
    },
    {
      dataField: 'priceHour',
      text: i18n.reportsRevenueTable.headerPriceHourResource,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '280px'
      }
    },
    {
      dataField: 'hoursIntervalName',
      text: i18n.reportsRevenueTable.headerHourName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '250px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.reportsRevenueTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '280px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.reportsRevenueTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '280px'
      }
    },
    deleteBillDetail()
  ];
  return columns;
}

export default getTableModel;
