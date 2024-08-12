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
    <div className="bg-green-50 min-h-screen font-urbanist">
      <div className="container mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="border-b border-gray-200 pb-6 mb-6">
            <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
              <li>
                <button
                  onClick={() => setActiveTab("account")}
                  className={`font-bold ${
                    activeTab === "account"
                      ? "text-green-800 border-b-2 border-green-800"
                      : "text-gray-500"
                  } pb-2 transition duration-300 ease-in-out hover:text-green-600`}
                >
                  Account
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`font-bold ${
                    activeTab === "notifications"
                      ? "text-green-800 border-b-2 border-green-800"
                      : "text-gray-500"
                  } pb-2 transition duration-300 ease-in-out hover:text-green-600`}
                >
                  Notifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("bookmarks")}
                  className={`font-bold ${
                    activeTab === "bookmarks"
                      ? "text-green-800 border-b-2 border-green-800"
                      : "text-gray-500"
                  } pb-2 transition duration-300 ease-in-out hover:text-green-600`}
                >
                  My Bookmarks
                </button>
              </li>
            </ul>
          </div>
          </div>
          </div>
          </div>
          )
} 