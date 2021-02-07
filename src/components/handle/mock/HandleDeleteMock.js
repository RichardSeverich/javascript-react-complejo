import messageManager from "./../MessageManager";
import i18n from "./../../../i18n/i18n";

const handleDelete = (endpoint, id) => {
  const message = i18n.messages.confirmModal;
  let result = window.confirm(message);
  if(result){
    const response = {status: 200}
    messageManager.deleteMessages(response);
  }
};

export default handleDelete;
