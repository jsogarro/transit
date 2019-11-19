import { GraphQLServer } from 'graphql-yoga';
import * as books from './endpoints/books';

const typeDef = `
  type Query
`;

const server = new GraphQLServer({
  typeDefs: [typeDef, books.typeDef],
  resolvers: [books.resolvers],
});

export default server;
