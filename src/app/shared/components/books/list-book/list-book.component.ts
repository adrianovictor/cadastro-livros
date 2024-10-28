import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Book } from '../../../../core/models/book.model';
import { BookService } from '../../../services/book.service';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-list-book',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.css'
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchText: string = '';

  constructor(
    private bookService: BookService, 
    private toastService: ToastService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(response => {
      this.books = response;
      this.filteredBooks = response;
      this.toastService.showToast('success', 'Operação realizada com sucesso!');
    });
  }

  public remover(livroId: number): void {
    if (confirm('Tem certeza que deseja excluir os livros selecionados?')) {
      this.bookService.deleteBook(livroId).subscribe({
        next: () => {
          this.toastService.showToast('success', 'Operação realizada com sucesso!');
          this.loadBooks(); // Recarrega a lista de livros após a exclusão
        },
        error: (err) => {
          this.toastService.showToast('error', 'Ocorreu um erro durante a operação.');
        }
      });
    }
  }  

  public filterBooks(): void {
    if (this.searchText) {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(this.searchText.toLowerCase()) || 
        book.author.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredBooks = this.books; // Se não houver texto de busca, exibe todos os livros
    }
  } 

}
