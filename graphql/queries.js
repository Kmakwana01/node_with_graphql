const { GraphQLList } = require('graphql');
const UserType = require('./types/userTypes');
const CategoryType = require('./types/categoriTypes');
const User = require('../models/user.model');
const Category = require('../models/categori.model');

// Define the root query
const RootQuery = {
  users: {
    type: new GraphQLList(UserType),
    resolve() {
      return User.find(); // Fetch all users
    }
  },
  categories: {
    type: new GraphQLList(CategoryType),
    resolve() {
      return Category.find(); // Fetch all categories
    }
  }
};

module.exports = RootQuery;
