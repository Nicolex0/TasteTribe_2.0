import React from 'react';

const APIdocs = () => {
  const apiRoutes = [
    {
      title: "Users",
      routes: [
        { method: "GET", path: "/users", description: "Get all users" },
        { method: "GET", path: "/users/:id", description: "Get a specific user by ID" },
        { method: "POST", path: "/users", description: "Create a new user" },
        { method: "PATCH", path: "/users/:id", description: "Update an existing user by ID" },
        { method: "DELETE", path: "/users/:id", description: "Delete a user by ID" },
      ]
    },
    {
      title: "Recipes",
      routes: [
        { method: "GET", path: "/recipes", description: "Get all recipes" },
        { method: "GET", path: "/recipes/:id", description: "Get a specific recipe by ID" },
        { method: "POST", path: "/recipes", description: "Create a new recipe" },
        { method: "PATCH", path: "/recipes/:id", description: "Update an existing recipe by ID" },
        { method: "DELETE", path: "/recipes/:id", description: "Delete a recipe by ID" },
      ]
    },
    {
      title: "Comments",
      routes: [
        { method: "GET", path: "/comments", description: "Get all comments" },
        { method: "GET", path: "/comments/:id", description: "Get a specific comment by ID" },
        { method: "POST", path: "/comments", description: "Create a new comment" },
        { method: "PATCH", path: "/comments/:id", description: "Update an existing comment by ID" },
        { method: "DELETE", path: "/comments/:id", description: "Delete a comment by ID" },
      ]
    },
    {
      title: "Authentication",
      routes: [
        { method: "POST", path: "/auth/register", description: "Register a new user" },
        { method: "POST", path: "/auth/login", description: "Login a user and get a JWT" },
        { method: "PATCH", path: "/auth/password", description: "Update a user's password" },
        { method: "DELETE", path: "/auth/delete", description: "Delete a user account" },
      ]
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
      {apiRoutes.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <ul className="space-y-2">
            {section.routes.map((route, idx) => (
              <li key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex justify-between">
                  <span className="text-lg font-medium">{route.method}</span>
                  <span className="text-gray-600">{route.path}</span>
                </div>
                <p className="text-gray-700">{route.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default APIdocs;
