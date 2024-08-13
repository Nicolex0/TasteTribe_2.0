import React, { useState } from 'react';
import { FaClock, FaUtensils, FaUsers, FaStar, FaBookmark } from 'react-icons/fa';

const RecipeInfo = () => {
  const [rating, setRating] = useState(4.5);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { author: 'John Doe', text: 'Great recipe! I loved how easy it was to follow.' },
    { author: 'Jane Smith', text: 'Delicious! I added some extra herbs and it turned out amazing.' }
  ]);
  
  return (
    <div>
      RecipeInfo
    </div>
  )
}

export default RecipeInfo
