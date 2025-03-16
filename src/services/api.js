import axios from "axios";

const API_URL = import.meta.env.VITE_USERS_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const getEducationVideos = async () => {
  try {
    const response = await api.get("/education-lists");
    return response.data;
  } catch (error) {
    console.log("Error fetching education videos", error);
    throw error;
  }
};

export default api;
