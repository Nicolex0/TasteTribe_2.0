import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [file, setFile] = useState(null);

  const [activeTab, setActiveTab] = useState("account");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleExploreRecipesClick = () => {
    navigate("/featured-recipes");
  };

  return (
    <div></div>
  )
} 