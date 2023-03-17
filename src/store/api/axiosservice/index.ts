import axios from "axios";
import endpoints from "./endpoints";

const
  service = axios.create({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    baseURL: endpoints.base
  });

export default service;