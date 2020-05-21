import axios from "axios";

const api = axios.create({
  baseURL: "https://acharep.herokuapp.com/",
});

export default api;
