import axios from "axios";

// const usersApi = axios.create({
//   baseURL: "https://67d043f7825945773eb0399c.mockapi.io/video/v1",
// });

const API_URL = import.meta.env.VITE_USERS_URL;

const usersApi = axios.create({
  baseURL: API_URL,
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

//update user
export const updateUser = async (userId, updatedData) => {
  try {
    const response = await usersApi.put(`/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating user:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// delete user
export const deleteUser = async (userId) => {
  try {
    const response = await usersApi.delete(`/users/${userId}`);
    setTimeout(() => {
      return response.data;
    }, 3000);
  } catch (error) {
    console.error(
      "Error deleting user:",
      error.response?.data || error.message
    );
    // throw error;
  }
};

export default usersApi;
