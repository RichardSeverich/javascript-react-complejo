import mockData from "./../../../mock-data/mock-data-manager";

const handleGetMock = (endpoint, callback) => {
  switch(endpoint) {
    case "users/":
      callback(mockData.arrayUsers);
      break;
    case "users/filter-who-reserved/":
      callback(mockData.arrayUsers);
      break;
    case "resources/":
      callback(mockData.arrayResources);
      break;
    case "hours-interval/filter-avaliable/":
        callback(mockData.arrayAvaliableHours);
        break;
    case "hours-interval/filter-reserved/":
        callback(mockData.arrayReservedHours);
        break;
      case "reserved-resources/":
          callback(mockData.arrayBillDetail);
          break;
      case "bills/detail/":
          callback(mockData.arrayBillDetail);
          break;
      case "bills/filter-date/":
          callback(mockData.arrayBill);
          break;
    default:
      callback(mockData.arrayUsers);
  }
};

export default handleGetMock;
