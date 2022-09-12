export type Id = string;
export type Email = string;
export type Token = string;

export type Credentials = {
  email: string;
  name: string;
  lastName: string;
  password: string;
};

export type CreateUserData = Credentials & {
  passwordConfirmation: string;
};

export type User = Pick<Credentials, 'email' | 'name' | 'lastName'> & {
  id: Id;
};

export type RequestFail = {
  message: string;
};

export type LoginData = Pick<Credentials, 'email' | 'password'>;

export type Session = {
  user: User;
  token: Token;
};

export type BookCreationData = Pick<Book, 'title' | 'author' | 'publisher' | 'edition' | 'synopsis'>;

export type Book = {
  id: Id;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  synopsis: string;
};

export interface ApiProviderInterface {
  createUser(data:CreateUserData): Promise<User | RequestFail>;
  login(data: LoginData): Promise<User | RequestFail>;

  addBook(data: BookCreationData): Promise<Book | RequestFail>;
  deleteBook(id: Id): Promise<void | RequestFail>;
  updateBook(book: Book): Promise<Book | RequestFail>;
  listBooks(search?: string): Promise<Book[] | RequestFail>;
}
