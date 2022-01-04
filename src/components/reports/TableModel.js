import i18n from "./../../i18n/i18n";

const getTableModel = () => {

  const columns = [
    {
      dataField: 'month',
      text: i18n.reportsRevenueTable.columMonth,
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'revenue',
      text: i18n.reportsRevenueTable.columRevenue,
      headerStyle: {
        width: '120px'
      }
    }
  ];
  return columns;
}

export default getTableModel;
