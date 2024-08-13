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
    <div className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 p-8">
            <div className="text-center mb-8">
              <img src={recipe.chefImage} alt={recipe.chefName} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg object-cover" />
              <h1 className="text-4xl font-bold text-gray-800 mb-2 font-serif">{recipe.title}</h1>
              <p className="text-xl text-gray-600 italic font-light">by {recipe.chefName}</p>
            </div>

            <div className="mb-8 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={recipe.image} alt={recipe.title} className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>

            </div>
            </div>
            </div>
            </div>
    
  )
}

export default RecipeInfo
