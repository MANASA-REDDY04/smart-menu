import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:4000/api",
//   withCredentials: true, // important for cookies
// });

export const api = axios.create({
  baseURL: "https://smart-menu-i67q.onrender.com/api",
  withCredentials: true, 
});