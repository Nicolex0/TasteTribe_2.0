import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeaturedRecipesCard from '../components/FeaturedRecipesCard';

const mockData = 
    {
        chefImage: 'https://img.freepik.com/free-photo/young-african-american-woman-isolated-yellow-studio-background-facial-expression-beautiful-female-close-up-portrait-concept-human-emotions-facial-expression-smiling-keeping-calm_155003-25193.jpg?t=st=1723163379~exp=1723166979~hmac=eb8050034805c34763f392d47e5458b872844231636ae21810f4e327c1250260&w=360',
        title: 'Delicious Pasta Recipe',
        chefName: 'Wanane Nane',
        image: 'https://img.freepik.com/free-photo/tiramisu-cake-with-cocoa-coffee-black-background_123827-29270.jpg?t=st=1723330171~exp=1723333771~hmac=59b7a318823afb2318a21348559719e3d88345a06a045728eedd37ca9dfd3999&w=740',
        ingredients: '4 large egg yolks, 1/2 cup granulated sugar, 1 cup heavy cream...',
        instructions: 'In a shallow dish, combine the brewed coffee and coffee liqueur (if using). Set aside...',
        url: 'https://example.com/recipe',
        moreInfoUrl: 'https://example.com/recipe-details',
        rating: 4.5,
        numberOfRatings: 120,
        prepTime: '30 minutes',
        servings: 4,
        countryOfOrigin: 'Italy',
        dietType: 'Dessert',
      }
    
      

const dummyData = [mockData, mockData, mockData, mockData, mockData, mockData]
console.log(dummyData)

const FeaturedRecipes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(dummyData.length / 2));
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
  }, []);

  return (
      <div className="bg-gradient-to-r from-green-50 to-green-100 min-h-screen p-8 font-urbanist">
          <h1 className="text-4xl font-bold text-center mb-12 text-green-800 tracking-wide">Featured Recipes</h1>

          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
              <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                  {Array.from({ length: Math.ceil(dummyData.length / 2) }, (_, i) => i * 2).map((startIndex) => (
                      <div key={startIndex} className="w-full flex-shrink-0 flex">
                          {dummyData.slice(startIndex, startIndex + 2).map((recipe) => (
                              <div key={recipe.id} className="w-1/2 px-2">
                                  <Link to={`/recipes/${recipe.id}`} className="block w-full h-full">
                                      <FeaturedRecipesCard
                                          key = {recipe.id}
                                          recipe = {recipe}
                                      />
                                  </Link>
                              </div>
                          ))}
                      </div>
                  ))}
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {Array.from({ length: Math.ceil(dummyData.length / 2) }, (_, index) => (
                      <button
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                              index === currentIndex ? 'bg-green-600' : 'bg-green-300'
                          }`}
                          onClick={() => setCurrentIndex(index)}
                      />
                  ))}
              </div>
          </div>
      </div>
  );
};

export default FeaturedRecipes;
