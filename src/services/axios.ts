import axios from "axios";

export const Api = axios.create({
  baseURL: "https://tezton-api-dev.herokuapp.com/",
  // baseURL: "https://tezton-api.loca.lt/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
