
import handleLoginMock from "./HandleLoginMock";
import handleLoginRequest from "./HandleLoginRequest";

const { REACT_APP_MOCK_DATA } = process.env;

const handleLogin = (username, password, 
  resetUsername, resetPassword, handleNavigate) => {
  if (REACT_APP_MOCK_DATA === "FALSE") {  
    console.log("Mock data disable");
    handleLoginRequest(username, password, 
      resetUsername, resetPassword, handleNavigate);
  } else {
    console.log("Mock data enable");
    handleLoginMock(username, password, 
      resetUsername, resetPassword, handleNavigate);
  }
}

export default handleLogin;
