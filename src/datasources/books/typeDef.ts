/**
 * Book Type definition
 */

export const typeDef = `
  type Book {
    title: String
    author: String
  }
  extend type Query {
    books: [Book]
  }
`;