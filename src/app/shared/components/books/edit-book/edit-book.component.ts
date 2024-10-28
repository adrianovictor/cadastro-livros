import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../../core/models/book.model';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {
  bookId!: number; // ID do livro a ser editado
  book!: Book; // Objeto livro que será editado
  
  constructor(
    private route: ActivatedRoute, 
    private bookService: BookService, 
    private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Captura o ID da URL
      if (id) {
        this.bookId = +id; // Converte a string para número
        this.loadBook();
      }
    });
  }

  loadBook(): void {
    this.bookService.getBookById(this.bookId).subscribe({
      next: (data) => {
        console.log(data);
        this.book = data; // Manipula o valor retornado
      },
      error: (error) => {
        console.error('Erro ao carregar livro', error); // Manipula o erro
      },
      complete: () => {
        console.log('Carregamento do livro concluído'); // Opcional: manipula a conclusão
      }
    });
  }

  onSubmit(): void {
    this.bookService.updateBook(this.book).subscribe({
      next: (response) => {
        console.log('Livro atualizado com sucesso!', response);
        this.router.navigate(['/livros']); // Redireciona após a atualização
      },
      error: (error) => {
        console.error('Erro ao atualizar livro', error);
      }
    });    
  }

  formatPrice(): void {
    if (this.book.price) {
      this.book.price = parseFloat(this.book.price.toString().replace(',', '.'));
    }
  }  
}
