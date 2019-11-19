/**
 * Seeds
 */

const creatTable = "syms:`aapl`amzn`googl ixs";
// 172.0 1189.0 1073.0 ixs
const pxsQuery = "pxs:(1+10000000?.03)*172.0 1189.0 1073.0 ixs";
const datesQuery = "t:([]date:dates;time:times;sym:syms;qty:qtys;px:pxs)";
const datesQuery = "t:`date`time xasc t";

const seedDatabase = async (): Promise<any> => {};

seedDatabase();
