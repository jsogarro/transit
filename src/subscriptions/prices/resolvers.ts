/**
 * Price Resolvers
 */

import { Price } from './Price';

export const resolvers = {
  Query: {
    prices: () => Price.all(),
  },
};