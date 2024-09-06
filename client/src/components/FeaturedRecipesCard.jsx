import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBookmark,
  FaClock,
  FaComment,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const FeaturedRecipesCard = ({ recipe }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const navigate = useNavigate();

  const toggleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
  };
  const toggleBookmark = (e) => {
    e.preventDefault();
    setBookmarked(!bookmarked);
  };

  const handleCommentClick = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  const handleShare = (platform) => {
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          recipe.url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          recipe.url
        )}&text=${encodeURIComponent(recipe.title)}`;
        break;
      case "instagram":
        shareUrl = "https://www.instagram.com/";
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(
          `Check out this recipe: ${recipe.title} ${recipe.url}`
        )}`;
        break;
      default:
        break;
    }
    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <FaStar className="text-gray-300" />
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: "50%" }}
            >
              <FaStar className="text-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col h-[800px] w-[400px] relative transition-all duration-300 ease-in-out hover:shadow-3xl hover:scale-105 border-2 border-green-300 hover:border-green-400">
      <div className="flex items-center space-x-6 mb-6">
        <img
          src={recipe.chefImage}
          alt="Chef"
          className="w-16 h-16 rounded-full border-4 border-green-400 shadow-lg"
        />

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-green-800 truncate">
            {recipe.title}
          </h1>
          <p className="text-sm text-green-600 truncate">
            by <span className="font-semibold">{recipe.chefName}</span>
          </p>
        </div>
      </div>

      <div className="mb-6 relative overflow-hidden rounded-2xl">
        <img
          src={recipe.image}
          alt="Recipe"
          className="w-full h-64 object-cover shadow-xl transition-transform duration-300 ease-in-out hover:scale-110"
        />

        <div className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full px-3 py-2 text-sm font-semibold text-green-700 shadow-md">
          <FaClock className="inline mr-2" /> {recipe.prepTime}
        </div>
      </div>

      <div className="mb-6 text-sm text-gray-700 space-y-3 flex-grow overflow-y-auto max-h-48 pr-2 custom-scrollbar">
        <p className="flex justify-between">
          <span className="font-semibold text-green-700">Diet Type:</span>{" "}
          {recipe.dietType}
        </p>
        <p className="flex justify-between">
          <span className="font-semibold text-green-700">Servings:</span>{" "}
          {recipe.servings}
        </p>
        <p className="flex justify-between">
          <span className="font-semibold text-green-700">
            Country of Origin:
          </span>{" "}
          {recipe.countryOfOrigin}
        </p>
        <p>
          <span className="font-semibold text-green-700">Ingredients:</span>{" "}
          {recipe.ingredients}
        </p>
        <p>
          <span className="font-semibold text-green-700">Instructions:</span>{" "}
          {recipe.instructions}
        </p>
      </div>

      <Link
        to={`/recipes/${recipe.id}`}
        className="text-green-600 hover:text-green-700 text-sm block mb-4 underline font-semibold transition-colors duration-200"
      >
        See More Recipe Details
      </Link>

      <div className="flex items-center justify-between mb-6 bg-green-100 p-3 rounded-xl text-sm shadow-inner">
        <button
          onClick={toggleLike}
          className={`flex items-center space-x-2 ${
            liked ? "text-red-500" : "text-gray-600"
          } hover:text-red-600 transition-colors duration-200`}
        >
          <FaHeart className="text-xl" />
          <span>{liked ? "Liked" : "Like"}</span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars(recipe.rating)}</div>
          <span className="font-semibold">{recipe.rating.toFixed(1)}</span>
        </div>
        <button
          onClick={toggleBookmark}
          className={`${
            bookmarked ? "text-blue-500" : "text-gray-600"
          } group relative hover:text-blue-600 transition-colors duration-200`}
        >
          <FaBookmark className="text-xl" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </span>
        </button>
        <button
          onClick={handleCommentClick}
          className="text-gray-600 hover:text-green-600 transition-colors duration-200 group relative"
        >
          <FaComment className="text-xl" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Comment
          </span>
        </button>
      </div>

      <div className="flex flex-wrap justify-end gap-4">
        <button
          onClick={() => handleShare("facebook")}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 transform hover:scale-110"
        >
          <FaFacebookF className="text-2xl" />
        </button>
        <button
          onClick={() => handleShare("twitter")}
          className="text-black hover:text-gray-700 transition-colors duration-200 transform hover:scale-110"
        >
          <FaXTwitter className="text-2xl" />
        </button>
        <button
          onClick={() => handleShare("instagram")}
          className="text-pink-600 hover:text-pink-800 transition-colors duration-200 transform hover:scale-110"
        >
          <FaInstagram className="text-2xl" />
        </button>
        <button
          onClick={() => handleShare("whatsapp")}
          className="text-green-600 hover:text-green-800 transition-colors duration-200 transform hover:scale-110"
        >
          <FaWhatsapp className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedRecipesCard;
