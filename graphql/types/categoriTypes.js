const { GraphQLObjectType, GraphQLString } = require('graphql');

// CategoryType for GraphQL
const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

module.exports = CategoryType;
