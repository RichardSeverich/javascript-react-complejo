const token = window.localStorage.getItem("token");
const config = {
  headers: { Authorization: token }
};
export default config;
