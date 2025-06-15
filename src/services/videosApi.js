import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const getEducationVideos = async () => {
  try {
    const response = await api.get("/education-lists");
    return response.data;
  } catch (error) {
    console.log("Error while fetching videos", error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.log("Error while fetching users", error);
    throw error;
  }
};

export const createUserVideos = async (userData) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    console.log("Errr creating user", error);
    throw error;
  }
};

export const forgotPassword = async ({ email, password }) => {
  try {
    const getUser = await api.get(`/users?email=${email}`);
    if (getUser.data.length === 0) {
      throw new Error("Email tidak ditemukan");
    }

    const userId = getUser.data[0].id;

    const response = await api.put(`/users/${userId}`, {
      ...getUser.data[0],
      password,
      confirmPassword: password,
    });

    return response.data;
  } catch (error) {
    console.log("Gagal reset password", error);
    throw error;
  }
};

export default api;
