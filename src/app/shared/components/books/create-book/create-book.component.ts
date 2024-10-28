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
  book: Book = {
    id: 0,
    title: '',
    author: '',
    publisher: '',
    edition: 1,
    yearOfPublication: '',
    price: 0.00,
    quantity: 1,
    authorId: 0,
    subject: ''
  };
  
  constructor(
    private route: ActivatedRoute, 
    private bookService: BookService, 
    private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.bookService.saveBook(this.book).subscribe(() => {
      this.router.navigate(['/livros']);
    });    
  }  

  formatPrice(): void {
    if (this.book.price) {
      this.book.price = parseFloat(this.book.price.toString().replace(',', '.'));
    }
  }   
}
