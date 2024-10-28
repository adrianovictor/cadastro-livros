import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../core/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookApi = 'http://localhost:5170/api/books';

  constructor(private http: HttpClient) { }

  /**
   * Obtém uma listagem completa de todos os livros
   */
  getBooks(): Observable<any>
  {
    return this.http.get<any>(this.bookApi);
  }

  /**
   * Obtém informações de um determinado livro
   * @param id identificação do livro
   * @returns 
   */
  getBookById(id: number): Observable<any>
  {
    return this.http.get<any>(this.bookApi+`/${id}`);
  }  

  /**
   * Registra as informações de um determinado livro
   * @param book dados do livro
   * @returns 
   */
  saveBook(book: Book): Observable<any> {
    return this.http.post(this.bookApi, book);
  }  

  /**
   * Atualiza informações de um determinado livro
   * @param book dados do livro
   * @returns 
   */
  updateBook(book: Book): Observable<any> {
    return this.http.put(`${this.bookApi}/${book.id}`, book);
  }
  
  /**
   * Remove um livro 
   * @param id identificação do livro
   * @returns 
   */
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.bookApi}/${id}`);
  }  
}
