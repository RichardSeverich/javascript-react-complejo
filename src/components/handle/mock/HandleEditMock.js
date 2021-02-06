import messageManager from "./../MessageManager";

const handleEdit = (endpoint, body, id, handleReset, setIsEdit) => {
  const response = {status: 200}
  messageManager.editMessages(response);
  handleReset();
  setIsEdit(undefined);
};

export default handleEdit;
