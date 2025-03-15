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

//update user
export const updateUser = async (userId, updatedData) => {
  try {
    console.log("Updating user with ID:", userId);
    console.log("Updated Data:", updatedData);

    const response = await usersApi.put(`/users/${userId}`, updatedData);

    console.log("Response from API:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating user:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default usersApi;
