import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const useSignUp = () => {
      const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const [error, setError] = useState("");
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.email || !formData.password) {
          setError("All fields are required.");
          return;
        }
    
        setError("");
    
    
        try {
          await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
        } catch (error) {
          setError(error.message);
        }
      };
    
      return {
        formData,
        error,
        handleChange,
        handleSubmit,

      }

}

export default useSignUp