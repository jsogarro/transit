/**
 * Price Model
 */
const QUERY = "select date,time,qty,px from t where sym=`aapl";

export class Price {
  static all() {
    const result = [];
    return result;
  }

  static findBySymbol(symbol: string, limit: number = 100) {
    const query = `select date,time,qty,px from t where sym=\`${symbol}`;
    const result = [];
    return result;
  }
}
