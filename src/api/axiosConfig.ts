import axios from "axios";

export const API = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  baseURL: "https://api.odcloud.kr/api",
  withCredentials: true,
});
