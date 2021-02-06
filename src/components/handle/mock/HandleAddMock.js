import messageManager from "./../MessageManager";

const handleAddMock = (endpoint, body, handleReset) => {
  const response = {status: 201}
  handleReset();
  messageManager.addMessages(response);
};

export default handleAddMock;
