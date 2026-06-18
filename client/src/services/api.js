import axios from "axios";

const API = axios.create({
  baseURL: "https://sorry-backend-8flf.onrender.com/api",
});

export default API;