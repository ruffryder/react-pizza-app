import axios from "axios";

const instance = axios.create({
  baseURL: "https://pizza-app-4df3a.firebaseio.com/"
});

export default instance;
