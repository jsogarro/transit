/**
 * Trades
 */
export class Order {
  static all() {}

  static findByTradeId(orderId: string, limit: number = 100) {}

  static getAllTradesBySymbol(symbol: string) {}

  static getAllTradesByUkey(ukey: number) {}
}
