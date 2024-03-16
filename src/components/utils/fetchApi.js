import axios from "axios";

const BASE_URL = "https://ecom-proxy.codot.pro";

const options = {
  url: BASE_URL,

  value: { widget_code: "VUE_TEST" },
};

export const fetchFromApi = (url) => {
  const data = axios.post(`${BASE_URL}/${url}`, options);
  return data;
};
export const fetchFromApiData = (url, data) => {
  const response = axios.post(`${BASE_URL}/${url}`, data);

  return response;
};
