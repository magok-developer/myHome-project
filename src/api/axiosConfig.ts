import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.odcloud.kr/api/",
  withCredentials: false,
});
