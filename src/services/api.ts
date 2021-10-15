import axios from "axios";

const api = axios.create({
  baseURL: "http://172.17.244.81:3333",
});

export default api;
