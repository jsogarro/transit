/**
 * Book Type definition
 */

export const typeDef = `
  type Price {
    title: String
    author: String
  }
  extend type Query {
    books: [Book]
  }
`;