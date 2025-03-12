import axios from "axios";

const api = axios.create({
  baseURL: "https://67d043f7825945773eb0399c.mockapi.io/video/v1",
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
