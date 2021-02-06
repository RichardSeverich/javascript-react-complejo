import requestManager from "../../api/RequestManager"
import messageManager from "./../handle/MessageManager";

const handleLoginRequest = (username, password, 
  resetUsername, resetPassword, handleNavigate) => {
  const body = {
    username: username,
    password: password
  }
  requestManager.postAuth("login", body, (response) => {
    if(response.status===200){
      window.localStorage.setItem("token", response.data.data[0].token);
      window.localStorage.setItem("username", response.data.data[0].username);
      handleNavigate();
    } else {
      messageManager.loginMessages(response);
    }
    resetUsername();
    resetPassword();
  });
}

export default handleLoginRequest;
