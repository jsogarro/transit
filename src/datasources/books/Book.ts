/**
 * Books Model
 */
export const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

export class Book {
  static all() {
    return books;
  }

  static get() {}
}
