const { GraphQLString, GraphQLInt } = require('graphql');
const UserType = require('./types/userTypes');
const CategoryType = require('./types/categoriTypes');
const User = require('../models/user.model');
const Category = require('../models/categori.model');

// Define mutations
const Mutation = {
  // Add User Mutation
  addUser: {
    type: UserType,
    args: {
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      age: { type: GraphQLInt }
    },
    resolve(parent, args) {
      const newUser = new User({
        name: args.name,
        email: args.email,
        password: args.password,
        age: args.age
      });
      return newUser.save();
    }
  },

  // Add Category Mutation
  addCategory: {
    type: CategoryType,
    args: {
      name: { type: GraphQLString },
      description: { type: GraphQLString }
    },
    resolve(parent, args) {
      const newCategory = new Category({
        name: args.name,
        description: args.description
      });
      return newCategory.save();
    }
  }
};

module.exports = Mutation;
