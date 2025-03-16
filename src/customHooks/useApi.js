import { useEffect, useState } from "react";
import { getUser } from "../services/usersApi";

const useApi = () => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.log("Error fetching data :", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUsers(user);
      } catch (error) {
        console.log("Error fetching users");
        throw error;
      }
    };
    fetchUser();
  }, []);

  return { user, users };
};

export default useApi;
