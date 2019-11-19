/**
 * Book Resolvers
 */

import { Book } from './Book';

export const resolvers = {
  Query: {
    books: () => Book.all(),
  },
};