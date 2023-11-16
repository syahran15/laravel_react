import { useEffect, useState } from "react";
import axios from "axios";
function useUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  return {
    users,
  };
}

export default useUser;
