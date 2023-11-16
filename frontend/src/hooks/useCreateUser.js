import { useState } from "react";
import axios from "axios";

function useCreateUser() {
  const[name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/users", {
        name,
        email,
        gender,
      });
      console.log("Berhasil menambahkan user", response.data);
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setGender("");
  };

  return {
    name,
    setName,
    email,
    setEmail,
    gender,
    setGender,
    handleSave,
  };
}

export default useCreateUser;
