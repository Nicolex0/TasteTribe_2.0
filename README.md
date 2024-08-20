# Taste-Tribe
![image](https://github.com/user-attachments/assets/1a973972-2b36-4726-9f6b-3e8dafc2caa9)

Welcome to TasteTribe! Finding a suitable recipe online can be trying, especially since most of the accessible alternatives are high-end meals that may not be appropriate for a middle- or lower-class home. Taste Tribe aims to address this issue by providing a forum for discovering and sharing simple, practical recipes that meet everyday needs. Our service gives you access to a variety of simple recipes, complete with ingredients, methods, and serving sizes. Additionally, registered users can improve their experience by commenting, bookmarking, and rating recipes.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Team Members](#team-members)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
### Problem Statement
Finding the right recipe online can be difficult, especially when most of the available recipes are for high-end or gourmet meals that may be out of reach. Individuals and families frequently struggle to find easy and quick-to-prepare meals that meet their daily needs. The absence of easily available, simple recipes exacerbates the situation, making it impossible for customers to enjoy home-cooked meals without spending too much time searching or understanding complex cooking instructions.

### Solution
Taste Tribe addresses this problem by offering a dedicated platform for discovering and sharing simple, practical recipes. Our application provides a curated collection of recipes that include essential details such as ingredients, preparation procedures, and serving sizes. This ensures that users can quickly find recipes that are both manageable and affordable.

```console
.
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── client
│   ├── public
│   └── src
│       ├── components
│       │   ├── ExploreRecipes.jsx
│       │   ├── FeaturedRecipe.jsx
│       │   ├── FeaturedRecipesCard.jsx
│       │   ├── Footer.jsx
│       │   ├── NavBar.jsx
│       │   └── UserRecipeCard.jsx
│       ├── pages
│       │   ├── AboutUs
│       │       ├── AboutUs.jsx
│       │   ├── ContactUs
│       │       ├── ContactUs.jsx
│       │   ├── ErrorPage
│       │    ├── ErrorPage.jsx
│       │   ├── Home
│       │       ├──Home.jsx
│       │   ├── LogIn
│       │       ├──LogIn.jsx
│       │   └── RecipeInfo
│       │      ├──  RecipeInfo.jsx
│       │    ├──Recipes
│       │      ├── Recipes.jsx
│       │    ├──SignUp
│       │      ├── SignUp.jsx
│       │    ├──UserProfile
│       │      ├── UserProfie.jsx
│       │   └──UserRecipes
│       │      ├── UserRecipes.jsx
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       └── routes.jsx
└── server
    ├── models
    ├── routes
    ├── app.py
    ├── config.py
    ├── instructions.txt
    ├── requirements.txt
    └── run.py
```

## Features

### MVP (Minimum Viable Product)
- Login
- Create an account
- View and Update profile(profile images saved on Cloudinary)
- View and search recipes (by name, ingredients and number of people served)
- Filter recipes by country, ratings, ingredients, number of people served and createdDateTime.
- Create, Update and Delete new recipes
- Bookmarking/Favoriting recipes
- Share recipe on social media(facebook, twitter and whatsapp)

## Technology Stack
### Frontend

- React
- React Router
- React icons
- tailwindCSS for styling

### Backend

- Flask
- SQLAlchemy for ORM
- SQLite
- RESTful API

### Deployment

- Vercel for Frontebd
- Render for Backend

## Installation
### Backend Setup

1. Clone the repository:

    ```sh
    git clone git@github.com:Nicolex0/TasteTribe_2.0.git
    cd TasteTribe_2.0
    ```

### Frontend Setup

1. Install the frontend dependencies:

    ```sh
    npm install
    ```

2. Start the React development server:

    ```sh
    npm run dev
    ```
## Team Members

- Nicole Apono
- Dennis Githaiga
- Joy Simiyu
- Tony Brian
- John-Alexander Kamau

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
