const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// UserType for GraphQL
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

module.exports = UserType;
