import axios from 'axios';

const usersApi = axios.create({
    baseURL: "https://67d043f7825945773eb0399c.mockapi.io/video/v1"
});

export const createUser = async (userData) => {
    try {
        const response = await usersApi.post("/users", userData);
        return response.data;
        console.log(data);
    } catch (error) {
        console.log("Error creating user:", error);
        throw error;
    }
}


export default usersApi;