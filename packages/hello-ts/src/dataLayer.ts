//////////////////////////////////////////
// TYPES FOR A DATA LATER W/ TYPESCRIPT //
//////////////////////////////////////////
class Book {
  constructor(public author: string) {}
}
class Movie {
  constructor(public director: string) {}
}
class Song {
  constructor(public artist: string) {}
}

interface EntityMap {
  book: Book;
  movie: Movie;
  song: Song;
}

class Store {
  /* ??? */
  get<K extends keyof EntityMap>(kind: K, id: string): EntityMap[K] {}
  getAll<K extends keyof EntityMap>(kind: K): EntityMap[K][] {}
  create<K extends keyof EntityMap>(kind: K, toCreate: EntityMap[K]): void {}
  update<K extends keyof EntityMap>(kind: K, id: string, props: Partial<EntityMap[K]>): void {}
}

const store = new Store();
store.get('movie', '123'); // Book
store.getAll('song'); // Book[]
store.create('book', {author: 'A Butt'}); // Book
store.update('book', '123', { author: 'Not A Butt' }); // Book
