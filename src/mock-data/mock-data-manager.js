import { users } from "./users.json";
import { resources } from "./resources.json";
import { avaliableHours } from "./avaliableHours.json";
import { reservedHours } from "./reservedHours.json";
import { billDetail } from "./billDetail.json";
import { bill } from "./bill.json";

var arrayUsers = users;
var arrayResources = resources;
var arrayAvaliableHours = avaliableHours;
var arrayReservedHours = reservedHours;
var arrayBill = bill;
var arrayBillDetail = billDetail;

const mockData = {
  arrayUsers: arrayUsers,
  arrayResources: arrayResources,
  arrayAvaliableHours: arrayAvaliableHours,
  arrayReservedHours: arrayReservedHours,
  arrayBill: arrayBill,
  arrayBillDetail: arrayBillDetail
};

export default mockData;
