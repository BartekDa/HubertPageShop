// src/components/Success/Success.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }, [navigate]);

  return (
    <div className="success-page">
      <h1>Płatność zakończona sukcesem! 🎉</h1>
      <p>Plan treningowy został wysłany na Twój adres email.</p>
    </div>
  );
};

export default Success;
