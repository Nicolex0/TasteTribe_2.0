from flask import Flask, jsonify, request, abort
from backend import app, db, bcrypt
from backend.models import User, Recipe

@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Recipe API"})

# --- User Routes ---

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_dict())

@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    if User.query.filter_by(username=data['username']).first() or User.query.filter_by(email=data['email']).first():
        return jsonify({"error": "User with that username or email already exists"}), 400

    new_user = User(
        firstName=data['firstName'],
        lastName=data['lastName'],
        username=data['username'],
        email=data['email'],
        _password_hash=bcrypt.generate_password_hash(data['password']).decode('utf-8'),
        aboutMe=data.get('aboutMe'),
        image_url=data.get('image_url'),
        bio=data.get('bio')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.to_dict()), 201

@app.route('/users/<int:id>', methods=['PATCH'])
def update_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    user.firstName = data.get('firstName', user.firstName)
    user.lastName = data.get('lastName', user.lastName)
    user.username = data.get('username', user.username)
    user.email = data.get('email', user.email)
    user.aboutMe = data.get('aboutMe', user.aboutMe)
    user.image_url = data.get('image_url', user.image_url)
    user.bio = data.get('bio', user.bio)

    if 'password' in data:
        user._password_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    db.session.commit()
    return jsonify(user.to_dict())

@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"error": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted"})


# --- Recipe Routes ---

@app.route('/recipes', methods=['GET'])
def get_recipes():
    recipes = Recipe.query.all()
    return jsonify([recipe.to_dict() for recipe in recipes])

@app.route('/recipes/<int:id>', methods=['GET'])
def get_recipe(id):
    recipe = Recipe.query.get(id)
    if recipe is None:
        return jsonify({"error": "Recipe not found"}), 404
    return jsonify(recipe.to_dict())

@app.route('/recipes', methods=['POST'])
def create_recipe():
    data = request.json
    new_recipe = Recipe(
        title=data['title'],
        ingredients=data['ingredients'],
        instructions=data['instructions'],
        author_id=data['author_id'],
        chefImage=data.get('chefImage'),
        chefName=data.get('chefName'),
        image=data.get('image'),
        url=data.get('url'),
        moreInfoUrl=data.get('moreInfoUrl'),
        rating=data.get('rating', 0.0),
        prepTime=data.get('prepTime'),
        servings=data.get('servings', 1),
        countryOfOrigin=data.get('countryOfOrigin'),
        dietType=data.get('dietType')
    )
    db.session.add(new_recipe)
    db.session.commit()
    return jsonify(new_recipe.to_dict()), 201

@app.route('/recipes/<int:id>', methods=['PATCH'])
def update_recipe(id):
    recipe = Recipe.query.get(id)
    if recipe is None:
        return jsonify({"error": "Recipe not found"}), 404

    data = request.json
    recipe.title = data.get('title', recipe.title)
    recipe.ingredients = data.get('ingredients', recipe.ingredients)
    recipe.instructions = data.get('instructions', recipe.instructions)
    recipe.chefImage = data.get('chefImage', recipe.chefImage)
    recipe.chefName = data.get('chefName', recipe.chefName)
    recipe.image = data.get('image', recipe.image)
    recipe.url = data.get('url', recipe.url)
    recipe.moreInfoUrl = data.get('moreInfoUrl', recipe.moreInfoUrl)
    recipe.rating = data.get('rating', recipe.rating)
    recipe.prepTime = data.get('prepTime', recipe.prepTime)
    recipe.servings = data.get('servings', recipe.servings)
    recipe.countryOfOrigin = data.get('countryOfOrigin', recipe.countryOfOrigin)
    recipe.dietType = data.get('dietType', recipe.dietType)

    db.session.commit()
    return jsonify(recipe.to_dict())

@app.route('/recipes/<int:id>', methods=['DELETE'])
def delete_recipe(id):
    recipe = Recipe.query.get(id)
    if recipe is None:
        return jsonify({"error": "Recipe not found"}), 404

    db.session.delete(recipe)
    db.session.commit()
    return jsonify({"message": "Recipe deleted"})
