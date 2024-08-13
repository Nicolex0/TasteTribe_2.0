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