import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaHeart, FaComment, FaStar, FaBookmark, FaClock } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const RecipeCard = ({recipe}) => {

  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
  };
  const toggleBookmark = (e) => {
    e.preventDefault();
    setBookmarked(!bookmarked);
  };

  const handleCommentClick = () => {
    window.location.href = recipe.moreInfoUrl;
  };

  const handleShare = (platform) => {
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(recipe.url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(recipe.url)}&text=${encodeURIComponent(recipe.title)}`;
        break;
      case 'instagram':
        // Instagram doesn't have a direct sharing URL, so we'll open Instagram's homepage
        shareUrl = 'https://www.instagram.com/';
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`Check out this recipe: ${recipe.title} ${recipe.url}`)}`;
        break;
      default:
        break;
    }
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

}