// API
import handleGetRequest from "./api/HandleGetRequest";
import handleAddRequest from "./api/HandleAddRequest";
import handleEditRequest from "./api/HandleEditRequest";
import handleDeleteRequest from "./api/HandleDeleteRequest";
import handleGetWithBodyRequest from "./api/HandleGetWithBodyRequest";
// MOCK
import handleGetMock from "./mock/HandleGetMock";
import handleAddMock from "./mock/HandleAddMock";
import handleEditMock from "./mock/HandleEditMock";
import handleDeleteMock from "./mock/HandleDeleteMock";
// COMMON
import handleEditNavigate from "./HandleEditNavigate.js";

const { REACT_APP_MOCK_DATA } = process.env;
const isMockDisable = REACT_APP_MOCK_DATA === "FALSE";

// GET
const handleGet = (endpoint, callback) => {
  isMockDisable 
  ? handleGetRequest(endpoint, callback) 
  : handleGetMock(endpoint, callback);
};
// CREATE
const handleCreate = (endpoint, data, handleReset) => {
  isMockDisable 
  ? handleAddRequest(endpoint, data, handleReset) 
  : handleAddMock(endpoint, data, handleReset);
};
// EDIT
const handleEdit = (endpoint, data, id, handleReset, setIsEdit) => {
  isMockDisable 
  ? handleEditRequest(endpoint, data, id, handleReset, setIsEdit) 
  : handleEditMock(endpoint, data, id, handleReset, setIsEdit);
};
// DELETE
let handleDelete = handleDeleteMock;
if(isMockDisable){
  handleDelete = handleDeleteRequest;
}
// GET WITH BODY
const handleGetWithBody = (endpoint, body, callback) => {
  isMockDisable 
  ? handleGetWithBodyRequest(endpoint, body, callback) 
  : handleGetMock(endpoint, callback);
};

export {
  handleGet,
  handleCreate,
  handleEdit,
  handleEditNavigate,
  handleDelete,
  handleGetWithBody
}
