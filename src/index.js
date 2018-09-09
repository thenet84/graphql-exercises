const { ApolloServer, gql } = require('apollo-server');
const Query = require('./resolvers/Query')

const typeDefs = gql`
  type Query{
    getFrameworks: [Framework],
    getFrameworkById(id: ID!): Framework
  }

  type Framework{
    id: ID!,
    title: String!,
    git: String,
    stars: Int
  }
`;

const resolvers = {
  Query
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});