import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://67d043f7825945773eb0399c.mockapi.io/video/v1",
});

// create user
export const createUser = async (userData) => {
  try {
    const response = await usersApi.post("/users", userData);
    return response.data;
  } catch (error) {
    console.log("Error creating user:", error);
    throw error;
  }
};

// read user
export const getUser = async () => {
  try {
    const response = await usersApi.get("/users");
    return response.data;
  } catch (error) {
    console.log("Error fetching education videos", error);
    throw error;
  }
};

export default usersApi;
