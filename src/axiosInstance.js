import axios from "axios";

export const axiosInstanse = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
