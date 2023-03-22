import axios from "axios";

const http = axios.create({
  baseURL: "data/",
  headers: {
    Accept: "applicaion/json",
    "Content-Type": "application/json",
  },
});

export default http;
