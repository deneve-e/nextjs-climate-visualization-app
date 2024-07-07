import { Station } from "@/app/types";

const axios = require("axios");
const BASE_URL = "http://127.0.0.1:5000/api";

const fetchData = async (path: string) => {
  try {
    const response = await axios.get(BASE_URL + path);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error
    // console.error("Error fetching data:", error);
  }
};

export const fetchStations = async (): Promise<Station[]> => {
  return fetchData("/stations");
};
