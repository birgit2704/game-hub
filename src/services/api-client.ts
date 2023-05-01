import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "81b8071d70ca4486bd7392692f4b3e5b",
  },
});
