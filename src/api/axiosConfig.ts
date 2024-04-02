import axios from "axios";

export const API = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  baseURL: "https://api.odcloud.kr/api/15077586/v1/",
  withCredentials: true,
});
