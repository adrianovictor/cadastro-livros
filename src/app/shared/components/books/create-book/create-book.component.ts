import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../../core/models/book.model';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit {
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
        //this.loadBook();
      }
    });
  }

  onSubmit(): void {
  }
}
