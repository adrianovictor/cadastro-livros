import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListBookComponent } from './shared/components/books/list-book/list-book.component';
import { ListAuthorComponent } from './shared/components/authors/list-author/list-author.component';
import { CreateBookComponent } from './shared/components/books/create-book/create-book.component';
import { EditBookComponent } from './shared/components/books/edit-book/edit-book.component';
import { BooksReportsComponent } from './shared/components/reports/books-reports/books-reports.component';

export const routes: Routes = [
    { path: '', redirectTo: 'livros', pathMatch: 'full' },
    { path: 'livros', component: ListBookComponent },
    { path: 'novo-livro', component: CreateBookComponent },
    { path: 'editar-livro/:id', component: EditBookComponent },
    { path: 'autores', component: ListAuthorComponent },
    { path: 'relatorio', component: BooksReportsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
