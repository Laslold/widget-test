import axios from "axios";

const errorWrapper = async (req) => {
  try {
    const { data } = await req;
    return data;
  } catch (error) {
    return false;
  }
};

const BASE_URL = "https://ecom-proxy.codot.pro";
const instance = axios.create({
  baseURL: BASE_URL + "/api/v1/widgets",
});
const options = {
  value: { widget_code: "VUE_TEST" },
};

export const fetchFromApi = (url) =>
  errorWrapper(instance.post(`/${url}`, options));

export const getTariffFromApi = async (value) =>
  errorWrapper(instance.post(`/get_tariff`, value));
