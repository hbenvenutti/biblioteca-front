import axios, { AxiosInstance } from 'axios';

import { 
  ApiProviderInterface, 
  Book, 
  BookCreationData, 
  CreateUserData, 
  LoginData, 
  RequestFail, 
  Session, 
  User } from "./ApiProviderInterface";

// ---------------------------------------------------------------------------------------------- //

export class ApiProvider implements ApiProviderInterface {
  api = axios.create({
    baseURL:'https://biblioteca-crud-teppa.herokuapp.com',
  })
  
  setAuthorizationConfig() {
    const token = localStorage.getItem('token');

    this.api = axios.create({
      baseURL:'https://biblioteca-crud-teppa.herokuapp.com',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  authorize(): string {
    const token = localStorage.getItem('token');

    return `bearer ${token}`;
  }

  async createUser(data: CreateUserData): Promise<User | RequestFail> {
    try {
      const response = await this.api.post('/accounts/users', data);
      
      return response.data as User;
      
    } catch (error) {
      return error as RequestFail
    }

  };

  async login(data: LoginData): Promise<User | undefined> {
    try {
      const response = await this.api.post('/accounts/sessions', data);
      localStorage.setItem('token', response.data.token);
      console.log('logged: ', response.data.user);
      return response.data.user as User;
    } 
    catch (error) {
      console.log(error);
    }
  }
  
  async addBook(data: BookCreationData): Promise<RequestFail | Book> {
    this.setAuthorizationConfig();

    try {
      console.log('try');
      const response = await this.api
        .post('/books', data)   

      return response.data as Book;
    } 
    catch (error) {
      console.log('catch');
      console.log('error: ', error);
      return error as RequestFail;
    }
  }
  
  async deleteBook(id: string): Promise<void | RequestFail> {
    this.setAuthorizationConfig();

    try {
      await this.api.delete(`/books/${id}`);
      
      return;
    } 
    catch (error) {
      console.log(error);
      return error as RequestFail;
    }
  }

  async updateBook(book: Book): Promise<RequestFail | Book> {
    this.setAuthorizationConfig();
    
    try {
      const response = await this.api.put(`/books/${book.id}`, book);

      return response.data as Book;
    } 
    catch (error) {
      return error as RequestFail;
    }
  }

  async listBooks(search?: string): Promise<Book[] | RequestFail> {
    try {
      const response = await this.api.get(`/books?search=${search}`);

      return response.data as Book[];
    } 
    catch (error) {
      console.log(error);
      return error as RequestFail;
    }
  }
}
