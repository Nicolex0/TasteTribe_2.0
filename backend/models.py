from . import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(100), nullable=False)
    lastName = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    aboutMe = db.Column(db.String(500))
    _password_hash = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String)
    bio = db.Column(db.String)

    recipes = db.relationship("Recipe", back_populates="user")

    def to_dict(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "username": self.username,
            "email": self.email,
            "aboutMe": self.aboutMe,
            "image_url": self.image_url,
            "bio": self.bio,
            "recipes": [recipe.to_dict() for recipe in self.recipes],
        }


class Recipe(db.Model):
    __tablename__ = "recipes"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    ingredients = db.Column(db.String(500), nullable=False)
    instructions = db.Column(db.String(2000), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    chefImage = db.Column(db.String(255), nullable=True)
    chefName = db.Column(db.String(100), nullable=True)
    image = db.Column(db.String(255), nullable=True)
    url = db.Column(db.String(255), nullable=True)
    moreInfoUrl = db.Column(db.String(255), nullable=True)
    rating = db.Column(db.Float, nullable=True, default=0.0)
    prepTime = db.Column(db.String(50), nullable=True)
    servings = db.Column(db.Integer, nullable=True, default=1)
    countryOfOrigin = db.Column(db.String(100), nullable=True)
    dietType = db.Column(db.String(50), nullable=True)

    user = db.relationship("User", back_populates="recipes")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "ingredients": self.ingredients,
            "instructions": self.instructions,
            "author_id": self.author_id,
            "chefImage": self.chefImage,
            "chefName": self.chefName,
            "image": self.image,
            "url": self.url,
            "moreInfoUrl": self.moreInfoUrl,
            "rating": self.rating,
            "prepTime": self.prepTime,
            "servings": self.servings,
            "countryOfOrigin": self.countryOfOrigin,
            "dietType": self.dietType,
        }
