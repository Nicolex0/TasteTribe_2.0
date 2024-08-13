import React, { useState } from 'react';
import { FaClock, FaUtensils, FaUsers, FaStar, FaBookmark } from 'react-icons/fa';

const recipe = {
  chefImage: 'https://img.freepik.com/free-photo/young-african-american-woman-isolated-yellow-studio-background-facial-expression-beautiful-female-close-up-portrait-concept-human-emotions-facial-expression-smiling-keeping-calm_155003-25193.jpg?t=st=1723163379~exp=1723166979~hmac=eb8050034805c34763f392d47e5458b872844231636ae21810f4e327c1250260&w=360',
  title: 'Delicious Pasta Recipe',
  chefName: 'Wanane Nane',
  image: 'https://img.freepik.com/premium-photo/bowl-pasta-with-bowl-tomato-sauce-basil_1246444-1166.jpg?w=740',
  ingredients: [
    'Pasta',
    'Tomato Sauce',
    'Cheese',
    'Herbs'
  ],
  instructions: [
    'Cook pasta according to package instructions.',
    'Heat tomato sauce in a separate pan.',
    'Drain pasta and add it to the sauce.',
    'Mix well and let it simmer for 2-3 minutes.',
    'Serve hot, sprinkled with cheese and garnished with fresh herbs.'
  ],
  url: 'https://example.com/recipe',
  prepTime: '30 minutes',
  servings: 4,
  countryOfOrigin: 'Italy',
  dietType: 'Vegetarian',
};

const RecipeInfo = () => {
  const [rating, setRating] = useState(4.5);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { author: 'John Doe', text: 'Great recipe! I loved how easy it was to follow.' },
    { author: 'Jane Smith', text: 'Delicious! I added some extra herbs and it turned out amazing.' }
  ]);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, { author: 'You', text: comment }]);
      setComment('');
    }
  };

  return (
    <div>
      RecipeInfo
    </div>
  )
}

export default RecipeInfo
