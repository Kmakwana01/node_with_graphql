const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const RootQuery = require('./queries');
const Mutation = require('./mutations');

// Define the schema with query and mutation
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: RootQuery
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: Mutation
  })
});
