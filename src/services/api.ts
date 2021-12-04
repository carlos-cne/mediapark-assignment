import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL || "http://localhost:3003",
  headers: {
    "Content-Type": "application/json"
  }
});

const token = localStorage.getItem("@mediapark/token") as string;
api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default api;
